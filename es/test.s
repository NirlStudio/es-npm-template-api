
(define "profile" (=()
  var * (load "./profile");

  (define "initial-todos" (=>()
    (should "initial-todos is a global array." (=>()
      assert (initial-todos is-a array);
      assert 1 (initial-todos length);
    ).
).

(define "api" (=()
  (define "todo" (=()
    const todo (import "./api/todo");

    (should "(todo \"api\") is an express middleware." (=>()
      assert (todo "api":: is-a function);
      assert (todo "api":: is-generic);

      var api (todo "api":: generic);
      assert (api "all":: is-a function);
      assert (api "get":: is-a function);
      assert (api "post":: is-a function);
      assert (api "put":: is-a function);
      assert (api "delete":: is-a function);
    ).
  ).
).
