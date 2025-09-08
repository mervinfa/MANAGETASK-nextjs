"use client"

import { useState } from "react"

export default function CalendarPage(){
    const [date, setDate] = useState("")
    return(
        <div className="">
        <h1>Pilih Tanggal</h1>
        <input 
            type="date" 
            value={date}
            onChange={(e)=>setDate(e.target.value)}

        
        />
        <p>Tanggal yang dipilih : {date}</p>
        </div>
    );
}