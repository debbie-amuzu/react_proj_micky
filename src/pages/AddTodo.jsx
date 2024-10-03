import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddTodo = () => {

const navigate = useNavigate();

  const saveTodo = async (event) => {
    event.preventDefault();
    // collect form input
    const formData = new FormData(event.target)
    // post data to todo api
await axios.post("https://todo-api-g892.onrender.com/todos", {
  title: formData.get('todo')
})


    // Goto the homepage
    navigate('/');
  };

  return (
    <div>
      <h1>add a new todo</h1>
      <form onSubmit={saveTodo}>
        <input
          className="border " type="text" placeholder="Enter your task" required name="todo"/>
        <button type="submit">submit</button>
      </form>
      
    </div>
  );
};

export default AddTodo;
