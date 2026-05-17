import React, { useState } from 'react'
import './Task.css'
import classNames from 'classnames'
import { useStore } from '../store.js'
function Task({ id, title, STATUS }) {
    const deleteTask = useStore(state => state.deleteTask)
    const onDropTask = useStore(state => state.onDropTask)
    return (
        <div draggable="true" className='Task'
            onDragStart={(e) => {
                e.dataTransfer.setData('id', id);
                e.dataTransfer.effectAllowed = 'move';
            }}
        >
            <div>
                {title}
            </div>
            <div>
                <button onClick={() => deleteTask(id)}>Delete</button>
                <div className={classNames('status', STATUS)}>{STATUS}</div>
            </div>
        </div>
    )
}

export default Task
