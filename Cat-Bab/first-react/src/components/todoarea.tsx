import { FC } from "react"
import { TodoItemProps } from "../utils/interface"


const TodoProps: FC<TodoItemProps> = ({todo, onDelete, onToggle}) => {
  return (
    <main className="flex items-center justify-between p-4 bg-white border rounded-lg shadow-sm">
        <div className="flex items-center">
            <input type="checkbox" 
            className="mr-4" 
            checked={todo.completed} 
            onChange={() => onToggle(todo.id)}/>
        </div>
        <span className={`${todo.completed ? "line-through" :""}`}>
        {todo.text}
        </span>
        <div>
            <button 
             onClick={() => onDelete(todo.id)}
             className="px-3 py-1 text-white bg-red-500 rounded-lg hover:bg-red-600"
            >
                Delete
            </button>
        </div>
    </main>
  )
}

export default TodoProps