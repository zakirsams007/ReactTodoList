import React,{useState} from 'react'



const AddTask = ({onCancel,onAddTask }) => {
    const [task, setTask]= useState(" ")
    return(
        <div className='add-task-dialog'>
        <input value={task} onChange={(e)=>setTask(e.target.value)} />
        <div className='add-task-actions-container'>
            <div className='btn-container'>
                <button className='add-btn' onClick={()=>{
                 onAddTask(task);
                 onCancel(); 
                 setTask(" ");
                }}> 
                Add Task 
                </button>

                <button className='cancel-btn'
                 onClick={()=>{
                     onCancel();
                     setTask(" "); 
                    } }> 
                 cancel </button>
            </div>
            <div className='icon-container'></div>
        </div>
        
    </div >    
    )

}

 const Task = () => {
     const [showAddTask,setShowAddTask]= useState(false);
     const [tasks, setTasks] = useState([])

     const addNewTask=(text) =>{
         setTasks((prevState)=>[...prevState, text])


     }
    return (
        <div className='task'>
            <h1>Inbox</h1>

            <div className='add-task-btn' 
            onClick={()=>setShowAddTask((prevState)=> !prevState)}>
                <span className='plus'> + </span>
                <span className='add-task-text'> Add Task </span>
            </div>
           {showAddTask && <AddTask onAddTask={addNewTask}
            onCancel={()=> setShowAddTask(false)}/>} 

            {tasks.length > 0 ? tasks.map((task)=> <ul><li>{task}</li></ul>) :
             <p>No Task Yet!</p>}
        </div>
    )
}
export default Task;