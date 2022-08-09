import { useState } from "react"
import { findDOMNode } from "react-dom";

export const Main = ()=>
{
    const [listTasks,setListTasks] = useState([]);
    const [newTask,setTask] = useState("");

    function handleInput(e)
    {
        setTask(e.target.value);
    }

    function handleAddTask(id)
    {
        if(!document.getElementById("in").value)
        {
            return
        }
        const task = { id: listTasks.length === 0 ? 1 : listTasks[listTasks.length - 1].id + 1,taskName: newTask,isComplete:false}
        setListTasks([...listTasks,task]);
    }

    function handleDelete(id)
    {
        setListTasks(listTasks.filter(t=>t.id !==id))
    }

    function handleDone(id)
    {
        setListTasks(listTasks.map(t=> t.id === id ? {...t,isComplete:true}:t ))
    }

    return (
        <>
            <div className="flex  flex-col my-10">
                <input id="in" onChange={handleInput} type="text" className=" border border-black w-2/5 rounded m-auto" />
                <button onClick={handleAddTask} className="border border-black my-3 p-1 hover:bg-black hover:text-white rounded m-auto">Add Task</button>
            </div>
            {
                listTasks.map((t,i)=>
                {
              return <div key={i} className="flex justify-center">
                    <hr />
                    <h1 className="text-center border-double border-4 border-sky-500  mb-2 rounded m-auto p-1">{t.taskName}</h1>
                    <div >
                    <button onClick={()=> handleDelete(t.id)} className="m-5 border border-black my-3 p-1 bg-black text-red-700  hover:bg-red-700 hover:text-black m-auto" >Delete</button>
                    <button onClick={()=> handleDone(t.id)} className="mr-20 mb-2 border border-black p-1 bg-black text-white hover:bg-green-700 hover:text-green-700 m-auto " style={{backgroundColor: t.isComplete ? "green" : "black" }}>Complete</button>
                    </div>
                     <hr />
                </div>  
                })
            }
        </>
    )
}