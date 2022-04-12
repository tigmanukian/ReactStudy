import {createContext, useContext} from 'react';

const ACTION_TYPES = {
	SET_TASKS: 'SET_TASKS',
}

const defaultState = {
	isLoggedIn: null,
	tasks: [],
};

function reducer(state, action) {
	switch (action.type) {
		case ACTION_TYPES.SET_TASKS: {
			return { ...state, tasks: action.tasks }
		}
		default: return "Error Happened"
	}
}


const Context = createContext(defaultState);

const useCustomContext = () => useContext(Context);

function ContextProvider({ value, children }) {
	return <Context.Provider value={value}>
		{children}
	</Context.Provider>
}

export { ContextProvider, useCustomContext, defaultState, reducer, ACTION_TYPES };