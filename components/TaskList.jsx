import Link from 'next/link'
import React from 'react'
import DeleteForm from './DeleteForm'
import { getAllTasks } from '@/utils/action'
import DeleteFormCustom from './DeleteFormCustom'

const TaskList = async () => {

    const tasks = await getAllTasks()

    if (tasks.length === 0 ) {
        return <h2 className="mt-8 font-medium text-lg">No taskt to show....</h2>
    }

    return <ul className="mt-8">
        {tasks.map((item)=>{
            return (
                <li className="flex justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-lg shadow-lg">
                <h2 className={`text-lg capitalize ${item.completed ? "line-through" :null}`}>{item.content}</h2>
                <div className="flex gap-6 items-center">
                    <Link href={`/tasks/${item.id}`} className="btn btn-accent btn-xs">edit</Link>
                    <DeleteFormCustom id={item.id}/>
                </div>
            </li>
            )
        })}
    </ul>
 
}

export default TaskList
