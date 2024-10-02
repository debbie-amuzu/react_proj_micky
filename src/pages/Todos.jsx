import TodoTile from "../components/TodoTile";
import { Link } from "react-router-dom";




const Todos = () => {
    return (
        <div>
            <h1>all todos</h1>
            <div >
                <TodoTile title= {"creating React app"}/>
                <TodoTile title= {"Install Tailwind CSS"}/>
                <TodoTile title= {"Commit code to Github"}/>
                <TodoTile title= {"Host on Netify"}/>
            </div>
           <Link to={'/add'}>Add Todo</Link>
        </div>
    );

}

export default Todos;