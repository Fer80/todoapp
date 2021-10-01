import { useState, useEffect } from 'react';

const useInitialState = () => {

    const [ state, setState ] = useState({
        tasks: JSON.parse(window.localStorage.getItem('tasks')) || [
            {
                id: 111, 
                details: 'Tarea 1',
                completed: true
            },
            {
                id: 112, 
                details: 'Tarea 2',
                completed: false
            },
            {
                id: 113, 
                details: 'Tarea 3',
                completed: true
            }
        ]
    });

    useEffect(() => {
        window.localStorage.setItem('tasks', JSON.stringify(state.tasks));
    }, [state])

    const addTask = payload => {
        setState({
            ...state,
            tasks: [payload, ...state.tasks]
        });
    }

    const taskStateToggle = payload => {
        setState({
            ...state,
            tasks: [...state.tasks.map( task => {
                    if (task.id === payload.id) {
                        return payload;
                    } 
                    return task;
                })
            ],
        });
    }

    const removeTask = payload => {
        setState({
            ...state,
            tasks: [...state.tasks.filter(task => task.id !== payload.id)]
        });
    }

    const removeAllTasks = () => {
        setState({
            ...state,
            tasks: [...state.tasks.filter(task => !task.completed)]
        });
    }

    return {
        state,
        addTask,
        taskStateToggle,
        removeTask,
        removeAllTasks
    }
}

export default useInitialState;