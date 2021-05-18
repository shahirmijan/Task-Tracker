import Header from './Components/Header' //import each component and creating an object out of them
import {useState} from 'react'
import Tasks from './Components/Tasks'
import AddTask from './Components/AddTask'

function App() {
    const [userTasks, setUserTasks] = useState([]) 

  const Delete = (id) =>
  {
    // what this does is it takes setUserTask which is mutable, and only copies in the reminders from userTasks which are not equal to the 
    // to the ID passed in function the argument.
    setUserTasks(userTasks.filter((userTask) => userTask.id !== id)) 
  }

  const addTask = (userTask) =>
  {
    const id = Math.floor(Math.random() * 10000) + 1
    //console.log(id)
    const newTask = { id, ...userTask } 
    setUserTasks ([...userTasks, newTask])
  }

  const toggleReminder = (id) =>
  {
    setUserTasks(
      //what this does is map through task however it will set the reminder of  whatever that reminder 
      //within the task object already is for that particular reminder
      userTasks.map((userTask) =>
      userTask.id === id ? {...userTask, reminder:!userTask.reminder }:userTask
      ), 
      //console.log(userTasks.reminder)
      )
  } 

  return (
    <div className="App">
     <Header />
     <AddTask onAdd={addTask}/>
     {userTasks.length > 0 ?  //this basically an if statement which either displays the task if there is any or presents a messages
     (
       <div id="Task-Container">
              <Tasks allUserTasks={userTasks} onDelete={Delete} onToggle={toggleReminder}/> 
        </div>
     )
     :
     (
       <p id="No_Task_Text">Woo-Hoo! You have no tasks today!</p>
     )}
    </div>
  );
}

export default App; //this exports this JS file as an object
