import React, { useEffect, useState } from "react";
import Update from "./Update";
import { Todo } from "./models";
const Home:React.FC =() =>{

    const [Data, setData] = useState<string>('')
    const [List, setList]= useState<Todo[]>([])
    const [idHolder, setidHolder]= useState<number>()
    const [toggle, setToggle]= useState<boolean>(false)

    useEffect(()=>{
        if(Data){
            
        }
    })

    const handleDelete = (id:number)=>{
        const newlist = List.filter((item)=>item.id != id)
        setList(newlist)   
     }
     
     const handleEdit = (id:number)=>{
         console.log(id)
        setidHolder(id)
        const temp = List.find((item)=>item.id==id)
        const editing  = temp?.todo
        console.log(temp?.todo)
        setToggle(true)
        
        // setData(temp?.todo)
     }

     const edit = () =>{
        const index = List.findIndex((item)=> item.id==idHolder)
        const newData = {
            id: Date.now(),
            todo: Data
        }
        List.splice(index, 1, newData)
        setToggle(false)
        
     }
    return(
        <>
            <h1>Listing</h1>
            <Update Data={Data} setData={setData} List={List} setList={setList} edit={edit} toggle={toggle} setToggle={setToggle}/>

            {List.map((items)=>{
                return(
                    <div key={items.id}>
                     <label>{items.id}</label>
                     <label>{items.todo}</label>
                     <button onClick={()=>handleDelete(items.id)}>delete</button>
                     <button onClick={()=>handleEdit(items.id)}>edit</button>
                    </div>
                )
            })}  
        </>
    )
}
export default Home;