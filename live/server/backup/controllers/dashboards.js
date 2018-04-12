const Dashboard = require('../models').Dashboard;

module.exports = {
    list(req, res) {
        var query = {user: req.params.id}
        return Dashboard
        .findAll({
            where: query
            })
        .then(metric => res.status(200).send(metric))
        .catch(error => res.status(400).send(error));
    }
};
