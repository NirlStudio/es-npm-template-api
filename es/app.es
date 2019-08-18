#!/usr/bin/env es

# setup environment, for example: the server port number.
export * (load "./profile");

const express (import "express");
const todo (import "./api/todo");

(export main (=> ()
  const service (express service);
  service use "/api/v1", (todo app:: "call");

  var counter 0;
  (service get "/", (=> (req, res)
    res send 'Hello, visitor $(++ counter)';
  ).

  (service listen server-port, (=> ()
    print 'API server is running on $server-port ...';
  ).

  #(return)# server-port
).

# running as an app.
if (-module is -app) (main );
