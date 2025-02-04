'use strict';

// CRUD actions
module.exports = {
  createTodo: require('./createTodo'),
  readTodos: require('./readTodos'),
  updateTodo: require('./updateTodo'),
  deleteTodo: require('./deleteTodo'),
  clearTodo: require('./clearTodo'),
  patchDoneTodo: require('./patchDoneTodo'),
  readTodoid: require('./readTodoid'),
};
