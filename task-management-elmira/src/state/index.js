import {createStore} from 'event-storm';
import {usePublish, useStore} from 'react-event-storm';

const defaultState = {
	user: null,
	isLoggedIn: null,
	boards: [],
	jsBoardTasks: [],
};

const State = createStore(defaultState);

const useCustomState = () => useStore(State);

const useDispatch = () => usePublish(State);

export { useCustomState, useDispatch };