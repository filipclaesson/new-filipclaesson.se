const metricController = require('../controllers').metrics;
const userController = require('../controllers').users;

module.exports = (app) => {
  app.get('/metric/:id', metricController.list);
  // app.get('/metric', (req, res) => res.status(200).send({
  //   message: 'Welcome to the Todos API!',
  // }));
  //app.post('/books', booksController.create);
  // app.get('/api/todos', todosController.list);
  // app.post('/api/todos/:todoId/items', todoItemsController.create);

};
