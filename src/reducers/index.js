import { combineReducers } from "redux";
import agent from './agent';
import tickets from './tickets';
import users from './users';

// main reducers
export const reducers = combineReducers({
  agent: agent,
  tickets: tickets,
  users: users
});
