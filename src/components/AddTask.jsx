import React, { useContext, useRef } from 'react';

import '../assets/styles/addTask.css';
import AppContext from '../context/AppContext';

const AddTask = () => {

    const form = useRef(null);
    const { addTask } = useContext(AppContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);
        const task = {
            'id': Math.random(),
            'details': formData.get('details'),
            'completed': false
        };
        addTask(task);
        e.target.reset();
    }
    
    return (
        <div className="add-task-container">
            <form ref={form} onSubmit={handleSubmit}>
                <input type="text" placeholder="add details" name="details" />
                <button>Add</button>
            </form>
        </div>
    );
}

export default AddTask;
