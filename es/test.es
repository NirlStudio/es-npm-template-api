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
    const (app) (import "./api/todo");

    (should "(todo \"app\") is a generic express middleware." (=>()
      assert (app "call":: is-a function);
      assert (app "call":: is-generic);

      assert (app "all":: is-a function);
      assert (app "get":: is-a function);
      assert (app "post":: is-a function);
      assert (app "put":: is-a function);
      assert (app "patch":: is-a function);
      assert (app "delete":: is-a function);
    ).
  ).
).
