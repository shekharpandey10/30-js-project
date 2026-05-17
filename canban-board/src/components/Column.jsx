import React, { useEffect, useState } from 'react'
import './Column.css'
import Task from './Task'
import { useStore } from '../store'
function Column({ columnName }) {
    const [open, setOpen] = useState(false)
    const [newTask, setNewTask] = useState('')
    const tasks = useStore(state => state.tasks);
    const [task, setTask] = useState(tasks || [])
    console.log(tasks, 'this ')
    const addTask = useStore(state => state.addTask);
    const onDropTask = useStore(state => state.onDropTask);
    const statusKey = columnName.toUpperCase();

    useEffect(() => {
        setTask(tasks)
    }, [tasks])



    return (
        <div className='column' onDragOver={(e) => {
            e.preventDefault()
            e.dataTransfer.dropEffect = 'move'
        }}
            onDrop={(e) => {
                e.preventDefault()
                const id = e.dataTransfer.getData('id')
                if (id) {
                    onDropTask(id, statusKey)
                }
            }}
        >
            <div style={{ display: 'flex', gap: '5px', justifyContent: 'space-around' }}>
                {columnName}
                <button onClick={() => {
                    setOpen(true)
                }}>Add</button>

            </div>
            {tasks.filter(t => t.status === statusKey).map((t, i) => (
                <Task key={i} id={t.id} title={t.title} STATUS={t.status} />
            ))}
            {open &&
                <div>
                    <input type="text" name="" id="" onChange={(e) => setNewTask(e.target.value)} />
                    <button onClick={() => {
                        if (newTask.trim() !== '') {
                            addTask(newTask, statusKey)
                        }
                        setNewTask('')
                        setOpen(false)
                    }}>Add </button>
                </div>

            }
        </div>
    )
}

export default Column
