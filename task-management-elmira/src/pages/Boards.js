import React from 'react';
import { Link } from 'react-router-dom';
import { useCustomState } from '../state';

function Boards (){
    const { jsBoardTasks } = useCustomState();
    
    console.log('Log ::: jsBoardTasks ::: ', jsBoardTasks);
    return (
        <div>
            <h1>Boards</h1>
            <Link to='/boards/reactjs'>Go to react JS boards</Link>
        </div>
    );
}

export default Boards;