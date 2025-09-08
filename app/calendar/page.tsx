"use client";

import { useState } from "react";

export default function CalendarPage() {
  const [date, setDate] = useState("");

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Pilih Tanggal</h1>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border border-gray-300 rounded-md p-2"
      />
      <p className="mt-4">Tanggal yang dipilih : {date}</p>
    </div>
  );
}
