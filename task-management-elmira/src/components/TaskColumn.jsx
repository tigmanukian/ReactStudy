import React, {useMemo} from 'react';
import Task from './Task';

function TaskColumn ({ status, tasks, className, setIsModalOpen, setTriggerGet }){
    const filteredTasks = useMemo(
        () => tasks.filter(task => task.status === status),
        [status, tasks]);
    return (
        <div className={className}>
            <h3>{status.toUpperCase()}</h3>
            {filteredTasks.map(task => <Task setTriggerGet={setTriggerGet} setIsModalOpen={setIsModalOpen} key={task.id} {...task}/>)}
            <button onClick={() => setIsModalOpen({ isOpen: true, selectedTask: { status } })}>Add Task</button>
        </div>
    );
}

export default TaskColumn;