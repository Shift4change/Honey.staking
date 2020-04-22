const express = require("express");
const fileUpload=require('express-fileupload');
const db = require('./models')
const mongoose = require("mongoose");
const path = require('path');
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(fileUpload());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
// app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/solvestakingdb", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err))

app.post("/api/createuser", async (req, res) => {
  try {
    const errors = {}
    const {email, password, confirm_password, first_name, last_name} = req.body
    console.log(req.body)
    if(password !== confirm_password){
      return res.json({passwordDoesNotMatch: "Passwords don't match"})
    }
    const userExist = await db.User.findOne({email})
    if(userExist) {
      errors.email = 'User already exists'
      return res.status(400).json(errors)
    }
    const user = {
      first_name: req.body.first_name.trim(),
      last_name: req.body.last_name.trim(),
      email: req.body.email.trim(),
      password: req.body.password
    }
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(req.body.password, salt, async (error, hash) => {
        if(error) throw error
        user.password = hash
        db.User.create(user)
        .then(data => res.json({id: data._id}))
        .catch(err => console.log(err))
      })
    })
    
  } catch(err) {
    console.log(err)
  }
})

app.post("/api/login", async (req, res) => {
  try {
    const errors = {}
    const {password, email} = req.body
    console.log(password, email)
    const user = await db.User.findOne({email})
    if(!user) {
      errors.email = 'User not found'
      return res.status(404).json({userNotFound: "Not Found"})
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if(isMatch){
      res.json({sucess: true, id: user._id, name: user.first_name})
      const payload = {
        id: user._id
      }
      jwt.sign(payload, process.env.Secret, {expiresIn: 10000}, (err, token) => {
        res.status(200).json({
          sucess: true,
          token: `Bearer ${token}`
        })
      })
    } else {
      errors.password = 'Password is incorrect!'
      return res.status(401).json(errors)
    }
  } catch(err) {
    console.log(err)
  }
})

app.post('/api/logout', async (req, res) => {
  // Log user out of the application
  try {
      req.user.tokens = req.user.tokens.filter((token) => {
          return token.token != req.token
      })
      await req.user.save()
      res.send()
  } catch (error) {
      res.status(500).send(error)
  }
})

app.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

//upload file
app.post('/upload',(req,res)=> {
  if (req.files === null) {
    return res.status(400).json({msg:'No file Uploaded'});
  }
  const file=req.files.file;
  
  file.mv(`${__dirname}/client/public.uploads/${file.name}`, err =>{
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    res.json({fileName: file.name, filePath:`/uploads/${file.name}`});
  })
})

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
