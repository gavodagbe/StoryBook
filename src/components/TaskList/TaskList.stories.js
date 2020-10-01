import React from 'react'

import TaskList from './TaskList'
import * as TaskStories from '../Task/Task.stories'
import { Provider } from 'react-redux'
import store from '../../lib/store'

// Default configuration 
export default {
    component : TaskList,
    title : 'TaskList',
    decorators : [story => <Provider store={store}> <div style={{ padding : '3rem'}}>{story()}</div></Provider>] // Utilisation du décorateur pour mettre un style.
}

// Create template for each configuration
const Template = args => <TaskList {...args} />

export const Default = Template.bind({})
Default.args = {
   // Shaping the stories through args composition.
  // The data was inherited from the Default story in task.stories.js.
  tasks: [
    { ...TaskStories.Default.args.task, id: '1', title: 'Task 1' },
    { ...TaskStories.Default.args.task, id: '2', title: 'Task 2' },
    { ...TaskStories.Default.args.task, id: '3', title: 'Task 3' },
    { ...TaskStories.Default.args.task, id: '4', title: 'Task 4' },
    { ...TaskStories.Default.args.task, id: '5', title: 'Task 5' },
    { ...TaskStories.Default.args.task, id: '6', title: 'Task 6' },
  ] 
}

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Default story.
  tasks: [
    ...Default.args.tasks.slice(0, 5),
    { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
  ]
}

export const WithArchivedTasks = Template.bind({});
WithArchivedTasks.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Default story.
  tasks: [
    ...WithPinnedTasks.args.tasks,
    { id: '7', title: 'Task 7 (archived)', state: 'TASK_ARCHIVED' },
  ]
}

export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true
}

export const Empty = Template.bind({});
Empty.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Loading story.
  ...Loading.args,
  loading: false
}