import React from 'react'
import './Column.css'
import Task from './Task'
import { useStore } from '../store'
function Column({ columnName }) {
    const task = useStore(store => store.tasks)
    console.log(task)

    return (
        <div className='column'>
            <div>
                {columnName}
            </div>
            <Task title={'task one'} STATUS={columnName.toUpperCase()} />
        </div>
    )
}

export default Column
