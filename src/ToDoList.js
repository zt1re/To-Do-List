import TaskCard from "./TaskCard"
import { FaPlus } from "react-icons/fa";

const ToDoList = ({ tasks, setTasks, newTask, setNewTask, handleSubmit, handleCheck, handleDelete }) => {
  return (
    <div className="toDoList">

      <div className='toDoNav'>
          <img src="/ToDoIcon.png" alt="ToDo Icon" />
          <h2>To Do</h2>
      </div>

      <form className="toDoForm" onSubmit={handleSubmit} >
        <label htmlFor="addTask" className="addTaskLabel">Add New Task</label>
        <input
          className="addtaskbox"
          required
          autoFocus
          id="addTask"
          type="text"
          placeholder="Add New Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          type="submit" 
          className="addTaskButton"
          aria-label="Add Task"
        >
          <FaPlus className="addTaskIcon" />
        </button>
      </form>
      
      <TaskCard
        className="taskCard"
        tasks={tasks}
        setTasks={setTasks}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
    </div>
    
  )
}

export default ToDoList