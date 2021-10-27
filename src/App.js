import "./App.css";
import { useState } from "react";
function App() {
  const [todoList, setTodoList] = useState(["complete note"]);
  const [todo, setTodo] = useState();
  const handleTodoChange = (event) => setTodo(event.target.value);
  const clearCaches = () => setTodo("");
  const handleAddTodo = () => {
    setTodoList(todoList ? [...todoList, todo] : [todo]);
    clearCaches();
  };
  return (
    <div className="body">
      <div>
        <div className="hed">To-do-App!</div>
        <div className="newto">Add New To-Do</div>
          <div>
            <div>{todoList && todoList.map((todo) => <p>{todo}</p>)}</div>
              <div>
               <input className="box"
                type="text"
                name="todoName"
                value={todo}
                onChange={handleTodoChange}
               />
               <button className="add" onClick={handleAddTodo}>ADD</button>
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;
