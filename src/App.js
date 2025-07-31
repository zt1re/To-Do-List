import { useState } from "react";
import ToDoList from "./ToDoList";


function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('todo list')));

  const [newTask, setNewTask] = useState('');

  const setAndSaveTasks = (myNewTasks) => {
    setTasks(myNewTasks);
    localStorage.setItem('todo list', JSON.stringify(myNewTasks));
  }

  const addNewTask = (newTask) => {
    const id = tasks.length? tasks[tasks.length - 1].id + 1 : 1;
    const timestamp = new Date().toLocaleString();
    const myNewTask = {id, checked: false, task: newTask, time: timestamp};
    const taskList = [...tasks, myNewTask]
    setAndSaveTasks(taskList);
  }
    
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newTask) return;
    addNewTask(newTask)
    setNewTask('');
    console.log(newTask);
    
  }

  const handleCheck = (id) => {
    const taskList = tasks.map((task) => task.id === id ? { ...task, checked: !task.checked } : task);
    setAndSaveTasks(taskList);
  }

  const handleDelete = (id) => {
    const taskList = tasks.filter((task) => task.id !== id);
    setAndSaveTasks(taskList);
  }

  return (
    <div className="App">
      <ToDoList 
        tasks={tasks}
        setTasks={setTasks}
        newTask={newTask}
        setNewTask={setNewTask}
        handleSubmit={handleSubmit}
        handleDelete={handleDelete}
        handleCheck={handleCheck}
      />
    </div>
  );
}

export default App;
