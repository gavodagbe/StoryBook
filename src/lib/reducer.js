import { actions as actionsType} from "./actions";
// The initial state of our store when the app loads.
// Usually you would fetch this from a server
const defaultTasks = [
  { id: '1', title: 'Something', state: actionsType.TASK_ARCHIVED },
  { id: '2', title: 'Something more', state: actionsType.TASK_INBOX },
  { id: '3', title: 'Something else', state: actionsType.TASK_INBOX },
  { id: '4', title: 'Something again', state: actionsType.TASK_INBOX },
];

// All our reducers simply change the state of a single task.
const taskStateReducer = (taskState) => {
    return (state, action) => {
        return {
            ...state,
            tasks: state.tasks.map(task =>
            task.id === action.payload ? { ...task, state: taskState } : task
            ),
        };
    };
  }
  
// The reducer describes how the contents of the store change for each action
export const taskReducer = (state = {tasks : [...defaultTasks]}, action) => {
    switch (action.type) {
      case actionsType.TASK_ARCHIVED:
       
        return taskStateReducer(actionsType.TASK_ARCHIVED)(state, action);
      case actionsType.TASK_PINNED:
        console.log(actionsType.TASK_PINNED, state, action)
        return taskStateReducer(actionsType.TASK_PINNED)(state, action);
      default:
        return state;
    }
};
  