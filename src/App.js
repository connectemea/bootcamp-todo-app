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
    <div>
      <div>
        <div>
          {todoList &&
            todoList.map((todo) => (
              <div>
                <p>{todo}</p>
                <button onClick={() => handleDltBtn(todo)}>delete</button>
              </div>
            ))}
        </div>
        <div>
          <input
            type="text"
            name="todoName"
            value={todo}
            onChange={handleTodoChange}
          />
          <button onClick={handleAddTodo}>add</button>
        </div>
      </div>
    </div>
  );
}

export default App;
