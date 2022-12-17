import React from 'react'
/* import PropTypes from 'prop-types' */
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/level.enum'
import TaskComponent from '../pure/task'
function TasklistComponent() {
  const defaultTask = new Task('example','default description',false,LEVELS.URGENT)
  return (
    <div>
      <div>
        your Taskt:
      </div>
      <TaskComponent task ={defaultTask}></TaskComponent>
    </div>
  )
}


export default TasklistComponent

