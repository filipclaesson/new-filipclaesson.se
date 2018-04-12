const DashboardItem = require('../models').DashboardItem;
const Setting = require('../models').Setting;

module.exports = {
    // create(req, res) {
    //     console.log(req.body)
    //     return DashboardItem
    //     .create({
    //         name: req.body.name, 
    //         description: req.body.description, 
    //         user: req.body.user,
    //         locations: req.body.locations,
    //         group: req.body.group,
    //         aggrigation_type: req.body.aggrigation_type,
    //         aggrigation: req.body.aggrigation,
    //         low_sqm: req.body.low_sqm,
    //         high_sqm: req.body.high_sqm,
    //         low_date: req.body.low_date,
    //         high_date: req.body.high_date,
    //         name: req.body.name,
    //         description: req.body.description,
    //         user: req.body.user
    //     })
    //     .then(user => res.status(201).send(user))
    //     .catch(error => res.status(400).send(error));
    // }
    list(req, res) {
        var query = {dashboard_item: req.params.dashboard_id}
        console.log(query)
        return Setting
        .findAll({
            where: query
            ,include: [{model:Setting, required: false}]
            })
        .then(metric => res.status(200).send(metric))
        .catch(error => res.status(400).send(error));
    }
};
