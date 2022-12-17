import React from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'

function TaskComponent({task}) {
  return (
    <div>
      <h2>Nombre: {task.name}</h2>
      <h2>description: {task.description}</h2>
      <h2>Level: {task.level}</h2>
      <h4>This task is : {task.completed ? 'COMPLETED':'PEDING'}</h4>
    </div>
  )
}

TaskComponent.propTypes = {
    task:PropTypes.instanceOf(Task)
}

export default TaskComponent

