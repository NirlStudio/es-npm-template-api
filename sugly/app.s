#!/usr/bin/env sugly

# setup environment, for example: the server port number.
export * (load "./profile");

const express (import "$express");
const body-parser (import "$body-parser");
const todo (import "./api/todo");

(export main (=> ()
  const app (express call:: generic);
  (app use (=> (req, res, next)
    res header "Access-Control-Allow-Origin", "*";
    res header "Access-Control-Allow-Methods", "GET, POST, PUT, DELETE";
    res header "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept";
    next;
  ).

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
