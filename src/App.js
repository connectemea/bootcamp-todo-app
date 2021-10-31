import "./App.css";
import { useState } from "react";
import styles from "./styles.module.css";
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
    clearCaches(); //clear the todo input
  };
  const handleKeyPress = (e) =>
    e.code === "Enter" && todo ? handleAddTodo() : null;
  // handle delete action in todo
  const handleDltBtn = (name) =>
    setTodoList(todoList.filter((todo) => todo !== name));
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.container}>
        <div className={styles.appTitle}>To-do-App!</div>
        <div className={styles.subTitle}>Add New To-Do</div>
        <div className={styles.todoSection}>
          <div className={styles.todoList}>
            {todoList &&
              todoList.map((todo) => (
                <div className={styles.todoListItem}>
                  <p className={styles.todoName}>{todo}</p>
                  <button
                    className={styles.todoDltBtn}
                    onClick={() => handleDltBtn(todo)}
                  >
                    <i class="fas fa-trash"></i>
                  </button>
                </div>
              ))}
          </div>
          <div className={styles.todoInputs}>
            <input
              className={styles.todoInput}
              type="text"
              name="todoName"
              value={todo}
              onChange={handleTodoChange}
              onKeyPress={handleKeyPress}
            />
            <button
              className={todo ? styles.addBtn : styles.disabledAddBtn}
              onClick={todo ? handleAddTodo : null}
            >
              ADD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
