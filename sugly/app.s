#!/usr/bin/env sugly

# setup environment, for example: the value of user-name.
export * (load "./profile");

const express (import "$express");
const body-parser (import "$body-parser");
const todo (import "./api/todo");

const app (express call:: generic);
app use (body-parser json);
app use "/api/1", (todo "api");

var counter 0;
(app get "/", (=> (req, res)
  res send 'Hello, visitor $(++ counter)';
).
(app listen 3000, (=> ()
  print "sugly server is ready!";
).
