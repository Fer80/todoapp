import React from 'react';

import '../assets/styles/tasks.css';

import AddTask from './AddTask';
import Task from './Task';

const Tasks = ({ 
    handleClickDeleteAll, 
    handleClickAll, 
    handleClickActive, 
    handleClickCompleted, 
    tasksGroup, 
    tasksToDisplay 
}) => (

    <div className="tasks-container">
        <header>
            <button className={`${tasksGroup === 'all' ? 'current' : ''}`} onClick={handleClickAll}>
                All
            </button>
            <button className={`${tasksGroup === 'active' ? 'current' : ''}`} onClick={handleClickActive}>
                Active
            </button>
            <button className={`${tasksGroup === 'completed' ? 'current' : ''}`} onClick={handleClickCompleted}>
                Completed
            </button>
        </header>
        {tasksGroup !== 'completed' && <AddTask />}
        <div className="tasks">
            {tasksToDisplay.length > 0 ? 
                tasksToDisplay.map(task => (
                    <Task key={task.id} {...task} tasksGroup={tasksGroup} />
                ))
                :
                <p className="tasks-empty">No task has been added</p>
            }
        </div>
        {tasksGroup === 'completed' && 
            <button className="delete-all" onClick={handleClickDeleteAll}>
                <span className="material-icons">delete</span>
                delete all
            </button>
        }
    </div>

);

export default Tasks;
