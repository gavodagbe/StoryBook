// The actions are the "names" of the changes that can happen to the store
export const actions = {
    TASK_ARCHIVED: 'TASK_ARCHIVED',
    TASK_PINNED: 'TASK_PINNED',
    TASK_INBOX : 'TASK_INBOX'
};

/*
    Actions creators
*/
// The action creators bundle actions with the data required to execute them
export const archiveTask = id => (
    {   
        type: actions.TASK_ARCHIVED, 
        payload : id 
    }
)

export const pinTask = id => (
    { 
        type: actions.TASK_PINNED, 
        payload : id 
    }
)