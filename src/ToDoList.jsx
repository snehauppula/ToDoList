import {useState} from "react"
function ToDoList(){

        const [Tasks,setTasks] = useState([])
        const [NewTask,setNewTask] = useState("")
function handleInputchange(e){
        setNewTask(e.target.value)
}
function addTask(){
    if(NewTask.trim()!=="")
        {
        setTasks(t => [...t,NewTask])
        setNewTask("")
        }
}
function delTask(index){
        const updatedTasks = Tasks.filter((_,i)=>i!==index)
        setTasks( updatedTasks )
}
function moveup(index) {
    setTasks(Tasks => {
        if (index > 0) {
            const newTasks = [...Tasks]
            const taskToMove = newTasks[index]
            newTasks[index] = newTasks[index - 1]
            newTasks[index - 1] = taskToMove
            return newTasks
        }
        return Tasks
    })
}
function movedown(index) {
    setTasks(Tasks => {
        if (index < Tasks.length - 1) {
            const newTasks = [...Tasks]
            const taskToMove = newTasks[index]
            newTasks[index] = newTasks[index + 1]
            newTasks[index + 1] = taskToMove
            return newTasks
        }
        return Tasks
    })
}
    return(  
    <div id="todolist">
        <h1 id="h1">ToDoList</h1>   
          <div>  
            <input
            id="taskinput"
            type="text"
            value={NewTask}
            onChange={handleInputchange}
            placeholder="Enter a Task"
            ></input>
            <button id="add" onClick={addTask} >Add</button>
         </div>
        <ol>
            {Tasks.map((Task,index)=>
                        <li key={index}>
                        <span id="tasktext" >{Task}</span> 
                        <button id="delbutton" onClick={()=>delTask(index)}>⃠</button>
                        <button id="up" onClick={() => moveup(index)} >↑</button>   
                        <button id="down" onClick={() => movedown(index)} >↓</button>   
                        </li> 
                    )}


        </ol>
    </div>
    )
}
export default ToDoList