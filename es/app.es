#!/usr/bin/env es

# setup environment, for example: the server port number.
export * (load "./profile");

const express (import "es-express/express");
const body-parser (import "$body-parser");
const todo (import "./api/todo");

(export main (=> ()
  const app (express public-api);

  app use (body-parser json);
  app use "/api/v1", (todo "api");

  var counter 0;
  (app get "/", (=> (req, res)
    res send 'Hello, visitor $(++ counter)';
  ).

  (app listen server-port, (=> ()
    print 'API server is running on $server-port ...';
  ).

  #(return)# server-port
).

# running as an app.
if (-module is -app) (main );
