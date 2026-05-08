import React from 'react'
import './Task.css'
import classNames from 'classnames'
function Task({ title, STATUS }) {
    return (
        <div className='Task'>
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
