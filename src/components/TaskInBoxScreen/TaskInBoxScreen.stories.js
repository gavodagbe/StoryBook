import React from 'react'
import TaskInBoxScreen from './TaskInBoxScreen'
import store from '../../lib/store'
import { Provider } from 'react-redux'

export default {
    component : TaskInBoxScreen,
    title : 'TaskInBoxScreen',
    decorators : [story => <Provider store={store}> <div style={{ padding : '3rem'}}>{story()}</div></Provider>] // Utilisation du décorateur pour mettre un style.
}

export const Default = () =>  <TaskInBoxScreen />

export const Error = () => <TaskInBoxScreen error='Something' />