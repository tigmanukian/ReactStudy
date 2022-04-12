import React, {useEffect, useState} from 'react';
import { projectFireStore } from '../firebase';
import { ACTION_TYPES, useCustomContext } from '../Contex';
import TaskColumn from '../components/TaskColumn';
import Modal from '../components/Modal';
import useCollection from '../hooks/useCollection';

const STATUSES = {
    TODO: 'todo',
    DOING: 'doing',
    DONE: 'done',
}

function Board (){
    const { state: { tasks }, dispatch } = useCustomContext();
    const [modalState, setIsModalOpen] = useState({ isOpen: false, selectedTask: { status: 'todo' } });
    const [triggerGet, setTriggerGet] = useState(0);

    const { get } = useCollection()

    useEffect(() => {
        get();
        let unsub = projectFireStore.collection('tasks').onSnapshot(snapshot => { // .get().then()
            console.log('Log ::: snapshot ::: ', snapshot);
            let res = [];
            snapshot.docs.forEach(doc => {
                res.push({ id: doc.id, ...doc.data() })
            })
            dispatch({ type: ACTION_TYPES.SET_TASKS, tasks: res })
            console.log('Log ::: res ::: ', res);
        })
        //
        // return () => unsub();
    }, [triggerGet])

    console.log(tasks, 'tasks');

    return (
        <div className="container">
            <h1>Board</h1>
            <div className="boardContainer">
                <TaskColumn setTriggerGet={setTriggerGet} setIsModalOpen={setIsModalOpen}  className="column" tasks={tasks} status={STATUSES.TODO} />
                <TaskColumn setIsModalOpen={setIsModalOpen} className="column" tasks={tasks} status={STATUSES.DOING} />
                <TaskColumn setIsModalOpen={setIsModalOpen} className="column" tasks={tasks} status={STATUSES.DONE} />
            </div>
            {modalState.isOpen && <Modal setTriggerGet={setTriggerGet} setIsModalOpen={setIsModalOpen} selectedTask={modalState.selectedTask} />}
        </div>
    );
}

export default Board;