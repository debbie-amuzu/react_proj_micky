import { useState } from "react";
import TodoTile from "../components/TodoTile";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

// useState ([]) is default for array if its object  useState ({})  useState (false) for boolean  useState (0) for numbers

const Todos = () => {
  // 1. declare state to store variables
  const [todos, setTodos] = useState([]);

  // 2. define a function to get todos
  const getTodos = async () => {
    // use axios to get the todos
    const response = await axios.get(
      "https://todo-api-g892.onrender.com/todos"
    );
    console.table(response.data);
    // update todos state
    setTodos(response.data);
  };

  // call the function with use effect
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div>
      <h1>all todos</h1>
      <div>
        {todos.map((todo) => {
          return <TodoTile title={todo.title} key={todo._id} />;
        })}
      </div>
      <Link to={"/add"}>Add Todo</Link>
    </div>
  );
};

export default Todos;
