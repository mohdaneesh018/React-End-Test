import { useEffect, useState } from 'react'
import './App.css'

const Todo = () => {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  let handleAddTask = () => {
    if (task.trim() !== "") {
      setList([...list, task]);
      setTask("");
    }
  };

  let handleDeleteTask = (index) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  useEffect(() => {
    const saveTodo = JSON.parse(localStorage.getItem("list"));
    if (saveTodo) {
      setList(saveTodo);
    }
  }, []);

  return (
    <div
      style={{
        background: "blue",
        borderRadius: "5px",
        padding: "5px"
      }}
    >
      <h2
        style={{
          color: "white"
        }}
      >Todo List App</h2>
      <input
        style={{
          height: "30px",
          borderRadius: "10px",
          border: "2px solid red",
          outline: "none"
        }}
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(event) => setTask(event.target.value)}
      />
      <button
        style={{
          backgroundColor: "black",
          color: "white",
          marginLeft: "10px",
          borderRadius: "5px",
          border: "none",
          height: "25px",
          width: "70px"
        }}
        onClick={handleAddTask}>
        Add item
      </button>

      <ul
        style={{
          color: "white",
        }}
      >
        {list.map((listItem, i) => (
          <li
            key={i}>
            {listItem}
            <button
              style={{
                margin: "5px 10px",
                backgroundColor: "black",
                color: "white",
                border: "none",
                borderRadius: "5px",
                height: "25px",
                width: "90px"
              }}
              onClick={() => handleDeleteTask(i)}>
              remove item
            </button>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default Todo;
