const User=require('../models/user.model')
// const bcrypt = require("bcrypt");

exports.create = (req,res) => {
  const user= new User({
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
    isActive: req.body.isActive || true,
    userType: req.body.userType,
  })
  user.save().then((data) => {res.send(data);})
.catch((err) => {res.status(500).send({ message: err.message || "Some error occurred while creating the User.",});})
}


exports.findAll = (req, res) => {
  User.find()     
     .then((users) => {
       res.status(200).send(users);
     })
     .catch((err) => {
       res.status(500).send({
         message: err.message || "Error Occured",
       });
     });
 };

 exports.findOne = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "User not found with id " + req.params.id,
        });
      }
      res.status(200).send(user);
      console.log(user);
    })
    .catch((err) => {
      return res.status(500).send({
        message: "Error retrieving user with id " + req.params.id,
      });
    });
};

exports.delete = (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "User not found ",
        });
      }
      res.send({ message: "User deleted successfully!" });
    })
    .catch((err) => {
      return res.status(500).send({
        message: "Could not delete user ",
      });
    });
};

exports.UpdateUser = (req, res) => {
  if (!req.body.email || !req.body.password || !req.body.name) {
    res.status(400).send({
      message: "required fields cannot be empty",
    });
  }
  User.findByIdAndUpdate(req.params.id, req.body, { new: true })
  .then((user) => {
    if (!user) {
      return res.status(404).send({
        message: "no user found",
      });
    }
    res.status(200).send(user);
  })
  .catch((err) => {
    return res.status(404).send({
      message: "error while updating the post",
    });
  });
};