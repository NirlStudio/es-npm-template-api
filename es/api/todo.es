const (read, to-write) (import "io");
const express (import "es-express");

export app (express app);

const saved-todos "~/.saved-todos.es";
const todos (eval (read saved-todos):: ?? initial-todos);

(const save-todos (=> ()
  (to-write saved-todos, (todos to-code:: to-string):: finally (=> waiting
    (if (waiting excuse:: is null)
      log i "todos are saved.";
    else
      log w "it failed to save todos.";
    ).
).

(app get "/todos", (=> (req, res)
  res status 200:: body todos;
).

(app get "/todo/:id", (=> (req, res)
  var id (req params:: id);
  var todo (todos (number of-int id);
  (if todo
    res status 200:: body todo;
  else
    res status 404;
  ).
).

(app post "/todo", (=> (req, res)
  var (data) (req body);
  (if (data is-not-an object)
    return (res status 400);
  ).
  data "id" (todos length);
  data "created" (date now);
  todos push data; save-todos;
  res status 200:: body data;
).

(app put "/todo/:id", (=> (req, res)
  var data (req body);
  (if (data is-not-an object)
    return (res status 400);
  ).
  var id (number of-int (req params:: id);
  (var updated (object assign (todos: id), data, (@:@ id,
    # convert completed status to the completion time on server side.
    completed: (data completed:: ? (date now), false).
  ).
  (if updated
    save-todos;
    res status 200:: body updated;
  else
    res status 404;
  )
).

(app delete "/todo/:id", (=> (req, res)
  var id (number of-int (req params:: id);
  todos reset id; save-todos;
  res status 200:: body (@:@ id);
).
