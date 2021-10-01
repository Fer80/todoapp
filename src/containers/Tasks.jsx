import React, { useState, useContext } from 'react';

import TasksComponent from '../components/Tasks';
import AppContext from '../context/AppContext';

const Tasks = () => {

    const { state, removeAllTasks } = useContext(AppContext);
    const [ tasksGroup, setTasksGroup ] = useState('all');

    const handleClickAll = (e) => {
        setTasksGroup('all');
    }

    const handleClickActive = (e) => {
        setTasksGroup('active');
    }

    const handleClickCompleted = (e) => {
        setTasksGroup('completed');
    }

    const handleClickDeleteAll = (e) => {
        removeAllTasks();
    }

    const tasksToDisplay = 
    tasksGroup === 'all' ? [...state.tasks]
    : tasksGroup === 'active' ? [...state.tasks.filter(task => !task.completed)]
    :  [...state.tasks.filter(task => task.completed)];

    return (
        <TasksComponent 
            handleClickCompleted={handleClickCompleted}
            handleClickActive={handleClickActive}
            handleClickAll={handleClickAll}
            handleClickDeleteAll={handleClickDeleteAll}
            tasksGroup={tasksGroup}
            tasksToDisplay={tasksToDisplay}
        />
    );
}

export default Tasks;
