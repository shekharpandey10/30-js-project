import React from 'react'
import './App.css'
import Column from './components/Column'
function App() {
    return (
        <div className='App'>
            <Column className='column' columnName={'Planner'} />
            <Column columnName={'Ongoing'} />
            <Column columnName={'Done'} />
        </div>
    )
}

export default App
