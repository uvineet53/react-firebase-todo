import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import "./Todo.css";
import db from './firebase.js';
import DeleteIcon from '@material-ui/icons/Delete';
const Todo = ({ todo }) => {
  return (
    <List>
      <ListItem alignItems="center" className="todo_list">
        <ListItemText primary={todo.todo} secondary="Dummy Deadline" />
        <DeleteIcon onClick={event=>db.collection('todos').doc(todo.id).delete()}/>
      </ListItem>
    </List>
  );
};

export default Todo;
