import Task from './Task'

const Tasks = ({ allUserTasks, onDelete, onToggle }) =>
{
    return (
            <>
            {allUserTasks.map((allUserTask) => 
                (
                    <Task key={allUserTasks.id} task={allUserTask} onDelete={onDelete} onToggle={onToggle}/>

                ))}
            </>
        )   
}

export default Tasks