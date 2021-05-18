import {useState} from 'react'

const AddTask = ({ onAdd }) => {
const [text, setText] = useState('')
const [day, setDay] = useState('')
const [reminder, setReminder] = useState(false)

const onSubmit = (e) =>
{   
    e.preventDefault()
    if(!text)
    {
        alert('please add task')
        return
    }
    else if(!day)
    {
        alert('please insert a day')
        return
    }
    onAdd({ text, day, reminder}) //add the task text, day and reminder
    setText('') //after adding the task information clear each field 
    setDay('')
    setReminder(false)
}
    return (
        <form className='add-form' onSubmit={ onSubmit }>
            <div className='form-control'>
                <label>Task Title: </label>
                <input type='text' placeholder='Add a new task' value={text} onChange={(e) => setText(e.target.value)}/>
            </div>

            <div className='form-control'>
                <label>Date: </label>
                <input type='date' placeholder='Add date' value={day} onChange={(e) => setDay(e.target.value)} />
            </div>

            <div className='form-control form-conttrol-check'>
                <label>Set reminder</label>
                <input type='checkbox'  id="checkbox" value={reminder} checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>
            <div className='form-control'>
            <input type='submit' value='Save reminder' className='saveButton' idName='saveReminder'/><br/>
            </div>
        </form>
    )
}

export default AddTask
