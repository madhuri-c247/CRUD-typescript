import React from "react";
import {useState} from "react";
import { Todo } from "./models";

interface Props{
    Data:string,
    setData: React.Dispatch<React.SetStateAction<string>>
    List:Todo[],
    setList: React.Dispatch<React.SetStateAction<Todo[]>>,
    edit: ()=> void
    toggle:boolean,
    setToggle:React.Dispatch<React.SetStateAction<boolean>>
}

const Update:React.FC<Props> = ({Data, setData, List, setList, edit, toggle, setToggle}) =>{

const handleSubmit = (e:any) =>{
    e.preventDefault();
    console.log(Data)
    setList([...List,{
        id:Date.now(),
        todo: Data
    }])  
    setData('') 
}

    return(
        <form onSubmit={handleSubmit}>
         <input type="text" value={Data} onChange={(e)=>setData(e.target.value)}/> 
         {toggle?
         <button onClick={edit}>Edit</button>:
         <input type="submit" value="Go"/>
         }
        </form>
    )
}
export default Update;