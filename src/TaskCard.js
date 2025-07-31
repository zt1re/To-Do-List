import { FaTrash } from "react-icons/fa";

const TaskCard = ({ tasks, setTasks, handleCheck, handleDelete }) => {
  return (
    <div className='taskCard'>
      {tasks.length  
      ? (
        <ul>
          {tasks.map((task) => {
            return (
              <li key={task.id}> 
                <form className='cardForm' action={task.id}>
                  <input 
                    className='checkbox'
                    id={`card-${task.id}`}
                    type="checkbox" 
                    checked= {task.checked} 
                    onChange={() => handleCheck(task.id)}
                  />
                  <label 
                    htmlFor={`card-${task.id}`} 
                    style={(task.checked) ? {textDecoration: 'line-through'} : null}
                    onDoubleClick={() => handleCheck(task.id)}>{task.task}
                  </label>
                  <p className="taskTime">{task.time}</p>
                  <button 
                    className="trashIcon"
                    onClick={() => handleDelete(task.id)}
                  >
                  <FaTrash />
                  </button>
                </form>
            </li>
            )
          }
        )}
        </ul> 
      )
      : (<p>Your List is Empty</p>)
      }
      
    </div>
  )
}

export default TaskCard