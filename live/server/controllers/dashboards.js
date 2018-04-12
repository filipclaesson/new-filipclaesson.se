const Dashboard = require('../models').Dashboard;
const DashboardItem = require('../models').DashboardItem;

module.exports = {
   list(req, res) {
    return Dashboard
    .findAll(
    {
      include: [{
        model: DashboardItem,
        as: 'DashboardItems',
      }],
    }
    )
    .then(metric => res.status(200).send(metric))
    .catch(error => res.status(400).send(error));
  }
};
