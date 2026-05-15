import React from 'react'
import './Task.css'
import classNames from 'classnames'
function Task({ title, STATUS }) {
    return (
        <div draggable="true" className='Task' onDragOver={(e) => {
            e.preventDefault()
            console.log('dragup')
        }}
            onDragLeave={(e) => {
                e.preventDefault()
                console.log('dragLeave')
            }}
            onDrop={(e) => {
                e.preventDefault();
                console.log('ondrop')
            }}
        >
            <div>
                {title}
            </div>
            <div>
                <div></div>
                <div className={classNames('status', STATUS)}>{STATUS}</div>
            </div>
        </div>
    )
}

export default Task
