import { useNavigate } from "react-router-dom";

const AddTodo = () => {

const navigate = useNavigate();

  const saveTodo = (event) => {
    event.preventDefault();
    // post data to todo api
    // Goto the homepage
    navigate('/');
  };

  return (
    <div>
      <h1>add a new todo</h1>
      <form onSubmit={saveTodo}>
        <input
          className="border "
          type="text"
          placeholder="Enter your task"
          required
        />
        <button type="submit">submit</button>
      </form>
      
    </div>
  );
};

export default AddTodo;
