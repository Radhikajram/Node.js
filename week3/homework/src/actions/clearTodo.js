'use strict';

function clearTodo(todo, request, response) {
  const id = request.params.id;

  todo
    .clear()
    .then(() => {
      response.status(204);
      response.end();
    })
    .catch(({ message }) => {
      response.status(500);
      response.json({ error: message });
    });
}

module.exports = clearTodo;
