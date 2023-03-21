import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./components/TodoList";
import {v1} from 'uuid';

export type FilterValueType = "A1" | "A2" | "B1" | "B2" | "C1" | "C2"

function App() {
   const [task, setTask] = useState([
      {id: v1(), title: "English", level: "A2", learnNow: false},
      {id: v1(), title: "Polish", level: 'B1', learnNow: true},
      {id: v1(), title: "French", level: 'A1', learnNow: false},
      {id: v1(), title: "Spanish",level: 'A1', learnNow: true},
      {id: v1(), title: "Ukrainian", level: 'C2', learnNow: true},
   ])

   function removeTask(id: string) {
      let filterTask = task.filter(t => t.id !== id)
      setTask(filterTask)
   }

   let [filter, setFilter] = useState<FilterValueType>('A1')

   let taskForLanguage = task

   if(filter === "A2") {
      taskForLanguage = task.filter(t => t.level === 'A2')
   }
   if(filter === "B1") {
      taskForLanguage = task.filter(t => t.level === 'B1')
   }
   if(filter === "B2") {
      taskForLanguage = task.filter(t => t.level === 'B2')
   }
   if(filter === "C1") {
      taskForLanguage = task.filter(t => t.level === 'C1')
   }
   if(filter === "C2") {
      taskForLanguage = task.filter(t => t.level === 'C2')
   }

   function changeFilter( value: FilterValueType ) {
      setFilter(value)
   }

   return (
      <div className="App">
         <TodoList
            title={'Level language'}
            tasks={taskForLanguage}
            removeTask={removeTask}
            changeFilter={changeFilter}
         />
      </div>
   );
}

export default App;
