type TaskListProps ={
    tasks: string[];
};


export default function TaskList({tasks}:TaskListProps){
    return (
        <ul className="mt-4 px-4 list-disc list-inside">
            {tasks.map((task,i)=>(
                <li key={i} className="p-2 border-b">
                    {task}
                </li>
            ))}
            
        </ul>
    );
}