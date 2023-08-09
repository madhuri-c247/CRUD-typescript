import React, { useEffect, useState } from "react";
import Update from "./Update";
import { Todo } from "./models";
const Home:React.FC =() =>{

    const [data, setData] = useState<string>('')
    const [list, setList]= useState<Todo[]>([])
    const [idHolder, setidHolder]= useState<number>()
    const [toggle, setToggle]= useState<boolean>(false)

    const handleDelete = (id:number)=>{
        const newlist = list.filter((item)=>item.id != id)
        setList(newlist)   
     }
     
     const handleEdit = (id:number)=>{
         console.log(id)
        setidHolder(id)
        const temp = list.find((item)=>item.id==id)
        console.log(temp?.todo)
        setToggle(true)
        
         setData(temp?.todo?temp?.todo:'')
     }

     const edit = () =>{
        const index = list.findIndex((item)=> item.id==idHolder)
        const newData = {
            id: Date.now(),
            todo: data
        }
        list.splice(index, 1, newData)
        setToggle(false)
        
     }
    return(
        <>
            <h1>Listing</h1>
            <Update Data={data} setData={setData} List={list} setList={setList} edit={edit} toggle={toggle} setToggle={setToggle}/>

            {list?list.map((items)=>{
                return(
                    <div key={items.id}>
                     <label>{items.id}</label>
                     <label>{items.todo}</label>
                     <button onClick={()=>handleDelete(items.id)}>delete</button>
                     <button onClick={()=>handleEdit(items.id)}>edit</button>
                    </div>
                )
            }):'No Data in a List'}  
        </>
    )
}
export default Home;