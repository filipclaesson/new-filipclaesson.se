const metricController = require('../controllers').metrics;
const userController = require('../controllers').users;
const apartmentController = require('../controllers').apartments;

module.exports = (app) => {
  app.get('/metric/:id', metricController.list);
  app.post('/get_metric_data', apartmentController.groupby);
  // app.get('/apartments', (req, res) => res.status(200).send({
  //   message: 'Welcome to the Todos API!',
  // }));
  //app.post('/books', booksController.create);
  // app.get('/api/todos', todosController.list);
  // app.post('/api/todos/:todoId/items', todoItemsController.create);
};
