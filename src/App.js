import { useState } from "react"

const App = () => {

  const [tasks,setTasks] = useState([]);
  const [task,setTask] = useState("");

  const addTasks = () => {
    if(task!==""){
      setTasks([...tasks,task])
      setTask("");
      console.log(tasks);
    }
    
  }

  const deleteTasks = (index) => {
    const updatedList = [...tasks];
    console.log('Automatic...')
    //delete updatedList[index];
    updatedList.splice(index,1)
    setTasks(updatedList)

  }

  return(
  <div className="flex flex-col items-center">
      <h1 className="text-4xl m-16 font-bold items-center">To-Do List</h1>
    <div className="p-6">
      <input className="bg-slate-100 rounded-mid p-4 m-4" 
      type="text"
      value={task}
      onChange = {(e)=>{
        setTask(e.target.value);
      }}
      placeholder="Create a new task" />
      <button onClick={addTasks}
      className="bg-green-400 text-white p-3 m-3 rounded-md font-bold hover:bg-lime-300">Add Task</button>
    </div>
    <div>
        {tasks?.length > 0 ? (
            <ul>
              {
                tasks.map((task,index)=>(
                  <div className="flex bg-slate-100 m-4 py-5 pl-12 pr-4 rounded-md" key={index}>
                    <li className="self-center font-semibold pr-10 mr-6 grow">{task}</li>
                    <button onClick={()=>{deleteTasks(index)}}
                    className="bg-pink-400 text-white font-bold p-2 mx-1 rounded-md hover:bg-fuchsia-300">Delete</button>
                  </div>
                ))
              }
            </ul>
        ):(
          <div>
            <p>No Task Defined</p>
          </div>
        )}
    </div>
  </div>
  
  )
}

export default App 