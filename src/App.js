import { useState,useEffect } from "react";
import "./App.css";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Todo from "./Todo";
import db from './firebase.js'
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    //this fires when app loads
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
      setTodos(snapshot.docs.map(doc=>({id:doc.id,todo: doc.data().todo})))
    });
  }, [])

  const addTodo = (event) => {
    event.preventDefault();
    db.collection('todos').add({
      todo:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="App">
      <h1>Vineet's Todo List</h1>
      <form>
        <FormControl>
          <InputLabel margin="dense">Write a Todo</InputLabel>
          <Input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <br />
        <br />
        <Button
          disabled={!input}
          variant="contained"
          color="primary"
          type="submit"
          onClick={addTodo}
        >
          Add Todo
        </Button>
      </form>
      <ul style={{paddingInlineStart:"0"}}>
        {todos.map((todo) => (
          <Todo todo={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
