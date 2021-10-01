import React, { useContext } from 'react';

import '../assets/styles/task.css';
import AppContext from '../context/AppContext';

const Task = props => {

    const { removeTask, taskStateToggle } = useContext(AppContext);

    const handleDeleteClick = (e) => {
        removeTask({
            'id': props.id,
            'details': props.details,
            'completed': props.completed
        });
    }

    const handleChange = (e) => {
        taskStateToggle({
            'id': props.id,
            'details': props.details,
            'completed': !props.completed
        });
    }

    return (
        <div className={`task-container${props.completed ? ' completed' : ''}`}>
            <div>
                <input type="checkbox" defaultChecked={props.completed} onChange={handleChange} />
                <span className="task">{props.details}</span>
            </div>
            {props.tasksGroup === 'completed' && 
                <span className="material-icons" onClick={handleDeleteClick}>delete</span>
            }
        </div>
    );
}

export default Task;
