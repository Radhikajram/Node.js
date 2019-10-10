'use strict';

function patchDoneTodo(todo, request, response) {
  const id = request.params.id;

  const done = request.body.todo.done;
  console.log(request.body.todo.done);
  if (done == null) throw new Error('todo not set');

  if (done != null)
    todo
      .patchDone(id, done)
      .then(todo => {
        response.status(200);
        response.json({ todo });
      })
      .catch(({ message, code }) => {
        response.status(code === 'not-found' ? 404 : 500);
        response.json({ error: message });
      });
}

module.exports = patchDoneTodo;
