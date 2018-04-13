const Dashboard = require('../models').Dashboard;
const DashboardItem = require('../models').DashboardItem;
const Setting = require('../models').Setting;

module.exports = {
   list(req, res) {
    console.log(req.params)
    return Dashboard
    .findAll(
    {
      where: {user:req.params.user_id},
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