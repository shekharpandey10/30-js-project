import React, { useState } from 'react'
import './Column.css'
import Task from './Task'
import { useStore } from '../store'
function Column({ columnName }) {
    const task = useStore(store => store.tasks)
    const addTask = useStore(store => store.addTask)
    const [open, setOpen] = useState(false)


    return (
        <div className='column'>
            <div style={{ display: 'flex', gap: '5px', justifyContent: 'space-around' }}>
                {columnName}
                <button onClick={() => {
                    setOpen(true)
                }}>Add</button>

            </div>
            <Task title={'task one'} STATUS={columnName.toUpperCase()} />
            {open && <input type="text" name="" id="" />}
        </div>
    )
}

export default Column
