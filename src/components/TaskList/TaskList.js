import React, { version } from 'react'
import Task from "../Task/Task"
import PropTypes from 'prop-types'
import {actions as actionsType , archiveTask, pinTask} from '../../lib/actions'
import { connect } from 'react-redux'

const TaskList = ({loading , tasks, onPinTask, onArchiveTask}) => {
    const events = {
        onPinTask,
        onArchiveTask
    }

    const LoadingRow = (
        <div className="loading-item">
          <span className="glow-checkbox" />
          <span className="glow-text">
            <span>Loading</span> <span>cool</span> <span>state</span>
          </span>
        </div>
      )

      if (loading) {
        return (
          <div className="list-items">
            {LoadingRow}
            {LoadingRow}
            {LoadingRow}
            {LoadingRow}
            {LoadingRow}
            {LoadingRow}
          </div>
        );
    }

    //store.subscribe(data => console.log(store.getState()))
    //tasks = store.getState()

    if(tasks.length === 0)
        return (
            <div className="list-items">
                <div className="wrapper-message">
                    <span className="icon-check" />
                    <div className="title-message">You have no tasks</div>
                    <div className="subtitle-message">Sit back and relax</div>
                </div>
            </div>
        )
    
    // Sort data by TASK_PINNED on top
    const tasksInOrder = [
            ...tasks.filter(t => t.state === 'TASK_PINNED'),
            ...tasks.filter(t => t.state !== 'TASK_PINNED'),
        ];
    
    //const tasksInOrder = tasks.sort((a, b) => a.state > b.state ? -1 : 1 )
    return (
        <div className='list-items'>
            {
                tasksInOrder.map(task => (
                    <Task key={task.id} task={task} {...events} />
                ))
            }
        </div>
    )
    
}

TaskList.prototypes = {
    loading : PropTypes.bool,
    tasks : PropTypes.arrayOf(Task.propTypes.task).isRequired,
    onPinTask : PropTypes.func.isRequired,
    onArchiveTask : PropTypes.func.isRequired
}

TaskList.defaultProps = {
    loading : false
}

const mapStateToProps = state => {
    return {
        tasks : state.tasks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onArchiveTask: id => dispatch(archiveTask(id)),
        onPinTask: id => dispatch(pinTask(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)