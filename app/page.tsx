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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const input = (e.target as HTMLFormElement).task.value;
          if (!input.trim()) return;
          addTask(input);
          (e.target as HTMLFormElement).reset();
        }}
        className="flex gap-2 mb-4"
      >
        <input
          name="task"
          type="text"
          placeholder="Task Title"
          className="border border-gray-300 rounded-md p-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 rounded">
          Add Task
        </button>
      </form>

      {/* <Navbar addTask={addTask} /> */}
    <main className="bg-[#FFFBDE] min-h-screen flex">
      <TaskList tasks={tasks}/>
    
    </main>
    </div>
  );
}