const Metric = require('../models').Metric;

module.exports = {
    create(req, res) {
        console.log(req.body)
        return Metric
        .create({
            name: req.body.name, 
            description: req.body.description, 
            settings: req.body.settings, 
            user: req.body.user
        })
        .then(user => res.status(201).send(user))
        .catch(error => res.status(400).send(error));
    }
    ,list(req, res) {
        var query = {user: req.params.id}
        return Metric
        .findAll({
            where: query
            })
        .then(metric => res.status(200).send(metric))
        .catch(error => res.status(400).send(error));
    }
};