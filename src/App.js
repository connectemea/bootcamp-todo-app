import "./App.css";
import { useState } from "react";
function App() {
  const [todoList, setTodoList] = useState();
  const [todo, setTodo] = useState();
  const handleTodoChange = (event) => setTodo(event.target.value);
  const clearCaches = () => setTodo("");
  const handleAddTodo = () => {
    setTodoList(todoList ? [...todoList, todo] : [todo]);
    clearCaches();
  };
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
