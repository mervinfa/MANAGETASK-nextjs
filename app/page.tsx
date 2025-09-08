"use client"

import { useState } from "react";
import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList";
import CalendarPage from "./components/CalendarPage"


export default function Home() {
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = (task:string)=>{
    setTasks([...tasks, task]);
  };

  return (
    <div className="bg-[#FFFBDE] min-h-screen flex">
      {/* <Navbar addTask={addTask} /> */}
    <main className="bg-[#FFFBDE] min-h-screen flex">
      <TaskList tasks={tasks}/>
    
    </main>
    </div>
  );
}