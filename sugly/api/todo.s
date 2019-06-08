const express (import "$express");

export api (express call);
const route ($api generic);

const todos (initial-todos copy);

(route get "/todos", (=> (req, res)
  todos push 'task $(todos length:: + 1)';
  res status 200:: json todos;
).

(route post "/todo", (=> (req, res)
  res status 200:: json (@ status: 200 );
).

(route delete "/todo/:id", (=> (req, res)
  var id (req params:: id);
  todos delete (number of-int id);
  res status 200:: json (@:@ id);
).
