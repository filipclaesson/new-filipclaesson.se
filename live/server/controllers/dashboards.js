const Dashboard = require('../models').Dashboard;
const DashboardItem = require('../models').DashboardItem;
const Setting = require('../models').Setting;

module.exports = {
   list(req, res) {
    return Dashboard
    .findAll(
    {
      include: [
        {
          model: DashboardItem,
          as: 'DashboardItems',
          include: [{
            model: Setting,
            as: 'Settings'
          }]
        }
      ],
    }
    )
    .then(metric => res.status(200).send(metric))
    .catch(error => res.status(400).send(error));
  }
};


// Group.findAll({
//   where: 'users.countryId = "DK"',
//   include: [ { model: User, as: 'secondaryUsers' } ]
// });

// module.exports = {
//    list(req, res) {
//     return Dashboard
//     .findAll(
//     {
//       include: [{
//         model: DashboardItem,
//         as: 'DashboardItems',
//       }],
//     }
//     )
//     .then(metric => res.status(200).send(metric))
//     .catch(error => res.status(400).send(error));
//   }
// };