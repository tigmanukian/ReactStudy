import React, {useEffect, useState} from 'react';
import useCollection from '../hooks/useCollection';

function Modal ({ selectedTask, setIsModalOpen, setTriggerGet }){
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()

    useEffect(() => {
        if(selectedTask.id) {
            setTitle(selectedTask.title)
            setDescription(selectedTask.description)
        }
    }, [selectedTask])

    const { add, update } = useCollection();

    const addTask = () => {
        add(title, description, selectedTask.status)
            .then(() => setTriggerGet(Math.random()))
    }

    const updateTask = () => {
        update({ ...selectedTask, title, description })
            .then(() => setTriggerGet(Math.random()))
    }

    const handleApply = () => {
        if(selectedTask.id) {
            updateTask();
        } else {
            addTask();
        }
        setIsModalOpen({ isOpen: false, selectedTask: {} });
    }


    return (
        <div className="modalContainer">
           <div className="modalContent">
                <div>
                    <h1>Create Task</h1>
                    <label htmlFor="title">Title</label>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        id="title"
                        type="text"
                    />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        id="description"
                        type="text"
                    />
                </div>
               <button onClick={handleApply}>{selectedTask.id ? 'Edit' : 'Add'}</button>
           </div>
        </div>
    );
}

export default Modal;