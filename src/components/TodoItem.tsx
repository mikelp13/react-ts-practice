import React, { FC } from 'react'
import { ITodo } from '../types/types'

interface TodoItemProps {
  todo: ITodo
}
// const TodoItem: FC<TodoItemProps> or second way to do it:
const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <li>
      <input type="checkbox" checked={todo.completed} />
      {todo.id}. {todo.title}
    </li>
  )
}

export default TodoItem
