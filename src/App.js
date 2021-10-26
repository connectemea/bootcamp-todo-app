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
  return (
    <div>
      <div>
        <div>{todoList && todoList.map((todo) => <p>{todo}</p>)}</div>
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
