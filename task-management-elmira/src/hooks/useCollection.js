import {projectFireStore} from '../firebase';
import {ACTION_TYPES, useCustomContext} from '../Contex';

export default function useCollection() {

	const { dispatch } = useCustomContext()

	const get = () => {
		return projectFireStore.collection('/tasks').get().then(res => {
			let response = [];
			res.docs.forEach(doc => {
				response.push({ id: doc.id, ...doc.data() })
			})
			console.log('Log ::: response ::: ', response);
			dispatch({ type: ACTION_TYPES.SET_TASKS, tasks: response })
		})

	}

	const add = (title, description, status = 'todo') => {
		return projectFireStore.collection('/tasks').add({ title, description, status })
	}

	const update = (task) => {
		const { id, ...otherKeys } = task
		return projectFireStore.collection('/tasks').doc(id).update({...otherKeys})
	}

	const Delete = (id) => {
		return projectFireStore.collection('/tasks').doc(id).delete();
	}
	
	return { add, update, Delete, get };
}