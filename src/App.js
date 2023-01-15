import { useState, useRef } from "react";
import './App.css';

function App() {
  const[todoList, setTodoList] = useState([]);
  const[currentTask, setCurrentTask] = useState("");

  const inputTask = useRef(null);

  const addTask = () => {
    setTodoList([...todoList, currentTask]);
    inputTask.current.value = "";
    setCurrentTask("");
    console.log(todoList);
  };

  const deleteTask = (taskToDelete) => {
      setTodoList(todoList.filter((task) => {
        return task !== taskToDelete;
      }))
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div>
        <input 
        ref = {inputTask}
        type="text" placeholder="Add Task Here" 
        onChange={(event) => {
          setCurrentTask(event.target.value);
        }}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <hr />
      <div>
        <ul>
          {todoList.map((val, key) => {
            return (
              <div id="task">
                <li key={key}> {val} </li>
                <button onClick={() => deleteTask(val)}>X</button>
              </div>
          )})}
        </ul>
      </div>
    </div>
  );
}

export default App;
