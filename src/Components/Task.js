import {FaTimes} from  'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`Task ${task.reminder ? 'Reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
             <FaTimes class="CloseIcon" onClick={() => onDelete(task.id)}/>
            <h3 id="Task-Title" className="Task-Info">{task.text}</h3>
            <p id="Task-Time" className="Task-Info">{task.day}</p>
        </div>
    )
}

export default Task