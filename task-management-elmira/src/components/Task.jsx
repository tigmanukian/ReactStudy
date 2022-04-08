import React from 'react';
import useCollection from '../hooks/useCollection';

function Task ({ id, title, description, status, setIsModalOpen, setTriggerGet }){

    const { Delete } = useCollection();

    const deleteTask = () => {
        Delete(id).then(res => setTriggerGet(Math.random()))
    }

    const updateTask = () => {
        setIsModalOpen({ isOpen: true, selectedTask: { id, title, description, status }})
    }

    return (
        <div className="task">
            <h2>{title}</h2>
            <h3>{description}</h3>
            <button onClick={updateTask}>Update</button>
            <button onClick={deleteTask}>Delete Task</button>
        </div>
    );
}

export default Task;