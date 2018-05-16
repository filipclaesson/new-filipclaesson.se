const DashboardItem = require('../models').DashboardItem;
const Setting = require('../models').Setting;
const Dashboard = require('../models').Dashboard;

module.exports = {
   list(req, res) {
    return DashboardItem
    .findAll(
    {
      include: [{
        model: Setting,
        as: 'Settings',
      }],
    }
    )
    .then(metric => res.status(200).send(metric))
    .catch(error => res.status(400).send(error));
  },
   create(req, res) {
    let graphSettings = req.body
    console.log("req.body")
    console.log(req.body)
    graphSettings["location"]
    // Creating with associations
    // http://docs.sequelizejs.com/manual/tutorial/associations.html
    return DashboardItem.create({
      name: graphSettings.name,
      description: graphSettings.description,
      item_type: 'graph',
      Settings: [
          {key:'locations',value: graphSettings['locations']},
          {key: 'group',value: graphSettings['group']},
          {key: 'aggrigation_type',value: graphSettings['aggrigation_type']},
          {key: 'aggrigation',value: graphSettings['aggrigation']},
          {key: 'sqm_low',value: graphSettings['sqm_low']},
          {key: 'sqm_high',value: 100},
          {key: 'range',value: '3 months'}
        ],
      dashboard: '1'
      }
      , {
      include: [{
        model: Setting,
        as: 'Settings',
      }]
    })
    .then(metric => res.status(200).send(metric))
    .catch(error => res.status(400).send(error));
   
  }
};

