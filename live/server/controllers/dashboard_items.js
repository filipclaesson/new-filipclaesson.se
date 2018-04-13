const DashboardItem = require('../models').DashboardItem;
const Setting = require('../models').Setting;

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
  }
};
