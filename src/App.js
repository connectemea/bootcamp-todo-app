import "./App.css";
import { useState } from "react";
function App() {
  // state for todoList
  const [todoList, setTodoList] = useState();
  // state for todo
  const [todo, setTodo] = useState();
  // handle todo onChange state
  const handleTodoChange = (event) => setTodo(event.target.value);
  // handle clear the state
  const clearCaches = () => setTodo("");
  // handle add todo to list
  const handleAddTodo = () => {
    setTodoList(todoList ? [...todoList, todo] : [todo]);
    clearCaches();
  };
  // handle delete action in todo
  const handleDltBtn = (name) =>
    setTodoList(todoList.filter((todo) => todo !== name));
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
