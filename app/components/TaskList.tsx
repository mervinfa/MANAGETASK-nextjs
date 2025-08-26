type TaskListProps ={
    tasks: string[];
};


export default function TaskList({tasks}:TaskListProps){
    return (
        <ul className="text-[#37353E] mt-4 px-4 list-disc list-inside">
             {tasks.length === 0 && <p className="text-[#37353E]">Belum ada task</p>}
            {tasks.map((task,i)=>(
                <li key={i} className="text-[#37353E] p-2 font-bold text-xl">
                    {task}
                </li>
            ))}
            
        </ul>
    );
}