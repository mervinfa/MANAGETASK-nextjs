"use client";

import { useState } from "react";
import CalendarPage from "./CalendarPage"
import Link from "next/link";
// import TaskList from "./TaskList";



// type NavbarProps ={
//   addTask: (task:string)=> void;
// }

export default function Navbar({/*{addTask}:NavbarProps*/}) {
  // const [tasks,setTasks] = useState<string[]>([]);
  // const [showform, setShowForm] = useState(false);
  // const [input, setInput] = useState("");

  
  // const submitTask = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if(!input.trim()) return;
  //   addTask(input);
  //   // setTasks([...tasks, input])
  //   setInput("")
  //   setShowForm(false)
  // };
  // const toggleClick = () => {
  //   setShowForm(!showform);
  // };

    return (
      <nav className="flex flex-col h-screen space-y-2 w-fit px-44 bg-[#91C8E4] pl-10 p-4 text-black text-xl font-semibold">
        <a
          href="#"
          // onClick={toggleClick}
          className="flex items-center space-x-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <span>Add Task</span>
        </a>

        {/* {showform && (
          <div>
            <form onSubmit={submitTask} className="mt-4 space-y-2">
            <input
              type="text"
              value={input}
              onChange={(e)=>setInput(e.target.value)}
              placeholder="Task Title"
              className="border border-gray-300 rounded-md p-2 w-full"
              />
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md p-2 w-full"
              >
              Add Task
            </button>
          </form>
            {/* <TaskList tasks={tasks} /> 
              </div>
        )} */}

        <a href="#" className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clipRule="evenodd"
            />
          </svg>
          <span>Search</span>
        </a>

        <a href="/calendar" className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
            <path
              fillRule="evenodd"
              d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
              clipRule="evenodd"
            />
          </svg>
          <span>Calendar</span>
        </a>
      </nav>
    
    );
  };

