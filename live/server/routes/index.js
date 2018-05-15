// const metricController = require('../controllers').metrics;
const userController = require('../controllers').users;
const dashboardItemController = require('../controllers').dashboard_items;
const dashboardController = require('../controllers').dashboards;
const apartmentController = require('../controllers').apartments;
const settingController = require('../controllers').settings;

module.exports = (app) => {
  // app.get('/metric/:id', metricController.list);
  app.post('/get_metric_data', apartmentController.groupby);
  app.get('/get_apt', apartmentController.list);

  // app.post('/create_metric', metricController.create);
  // app.get('/apartments', (req, res) => res.status(200).send({
  //   message: 'Welcome to the Todos API!',
  // }));
  app.get('/user', userController.list);
  app.get('/dashboard_item', dashboardItemController.list);
  app.post('/create_dashboard_item', dashboardItemController.create);
  app.get('/dashboard/:user_id', dashboardController.list);
  app.get('/dashboard', dashboardController.list);
  app.get('/setting', settingController.list);
  // app.get('/api/todos', todosController.list);
  // app.post('/api/todos/:todoId/items', todoItemsController.create);
};
