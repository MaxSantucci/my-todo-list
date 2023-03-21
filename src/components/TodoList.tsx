import React from "react";
import {FilterValueType} from "../App";

type LanguageType = {
   id: string,
   title: string,
   level: string,
   learnNow: boolean,
}

type PropsTypeTodoList = {
   title: string;
   tasks: Array<LanguageType>
   removeTask: (id: string) => void
   changeFilter: (value: FilterValueType) => void
}


export function TodoList(props: PropsTypeTodoList) {

   const languageMap = props.tasks.map(el => {
      const removeTaskHandler = () => {
         props.removeTask(el.id)
      }

      return (
         <li>
            <input type="checkbox" checked={el.learnNow}/>
            <span style={{marginRight: "5px", marginLeft: "5px"}}>{el.level}</span>
            <span>{el.title}</span>
            <button onClick={removeTaskHandler}>✖</button>
         </li>
      )
   })

   const aOneFilterHandler = () => {
      props.changeFilter("A1")
   }
   const aTwoFilterHandler = () => {
      props.changeFilter("A2")
   }
   const bOneFilterHandler = () => {
      props.changeFilter("B1")
   }
   const bTwoFilterHandler = () => {
      props.changeFilter("B2")
   }
   const cOneFilterHandler = () => {
      props.changeFilter("C1")
   }
   const cTwoFilterHandler = () => {
      props.changeFilter("C2")
   }

   return (
      <div>
         <h3>{props.title}</h3>
         <div>
            <input/>
            <button>+</button>
         </div>
         <ul>
            {languageMap}
         </ul>
         <div>
            <button onClick={aOneFilterHandler}>A1</button>
            <button onClick={aTwoFilterHandler}>A2</button>
            <button onClick={bOneFilterHandler}>B1</button>
            <button onClick={bTwoFilterHandler}>B2</button>
            <button onClick={cOneFilterHandler}>C1</button>
            <button onClick={cTwoFilterHandler}>C2</button>
         </div>
      </div>
   )
}