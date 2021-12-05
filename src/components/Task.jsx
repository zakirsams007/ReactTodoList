import React,{useState} from 'react'



const AddTask = ({onCancel}) => {
    return(
        <div className='add-task-dialog'>
        <input type='text' />
        <div className='add-task-actions-container'>
            <div className='btn-container'>
                <button className='add-btn'> Add Task </button>
                <button className='cancel-btn' onClick={()=>onCancel()}> cancel </button>
            </div>
            <div className='icon-container'></div>
        </div>
        
    </div >    
    )

}

 const Task = () => {
     const [showAddTask,setShowAddTask]= useState(false)
    return (
        <div className='task'>
            <h1>Inbox</h1>

            <div className='add-task-btn' 
            onClick={()=>setShowAddTask((prevState)=> !prevState)}>
                <span className='plus'> + </span>
                <span className='add-task-text'> Add Task </span>
            </div>
       
           {showAddTask && <AddTask onCancel={()=> setShowAddTask(false)}  />} 
        </div>
    )
}
export default Task;