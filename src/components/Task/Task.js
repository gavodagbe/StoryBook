import React from 'react'
import PropTypes from 'prop-types'
import {actions as actionsType} from '../../lib/actions'

const Task = ({task : { id, title, state}, onArchiveTask, onPinTask}) => 
{
    return (
        <div className={`list-item ${state}`}>
            <label className="checkbox">
                <input 
                    type="checkbox"
                    checked={state.trim() === actionsType.TASK_ARCHIVED}
                    disabled={true}
                    name="checked" />
                <span className='checkbox-custom' onClick={()=> onArchiveTask(id)} />
            </label>
            <div className='title' >
                <input 
                    type="text" 
                    value={title + state+actionsType.TASK_ARCHIVED} 
                    readOnly={true} 
                    placeholder="Input title" />
            </div>
            <div className="actions" onClick={event => event.stopPropagation()}>
                {
                    state != 'TASK_ARCHIVED' &&
                    <a onClick={() => onPinTask(id)}>
                        <span className={`icon-star`} />
                    </a>
                }
            </div>
            
        </div>
    )

}

Task.propTypes = {
    /** Composition of the task */
    task: PropTypes.shape({
      /** Id of the task */
      id: PropTypes.string.isRequired,
      /** Title of the task */
      title: PropTypes.string.isRequired,
      /** Current state of the task */
      state: PropTypes.string.isRequired,
    }),
    /** Event to change the task to archived */
    onArchiveTask: PropTypes.func,
    /** Event to change the task to pinned */
    onPinTask: PropTypes.func,
};

export default Task