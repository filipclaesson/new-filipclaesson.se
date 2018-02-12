const User = require('../models').User;

module.exports = {
  create(req, res) {
    console.log(req.body)
    return User
    .create({
      user_name: req.body.user_name,
      email: req.body.email
    })
    .then(user => res.status(201).send(user))
    .catch(error => res.status(400).send(error));
  }

  ,list(req, res) {
    // return(
    //   res.status(200).send({
    //   message: 'JANNE',
    //   }))
    return User
    .findAll()
    .then(metric => res.status(200).send(metric))
    .catch(error => res.status(400).send(error));
  }
};