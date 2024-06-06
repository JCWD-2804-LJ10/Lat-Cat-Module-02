
import TodoProps from "../../components/todoarea"
import { FC, useState } from "react"

interface Todo{
  id?: number;
  text?: string;
  completed?: boolean;
}

const TodoPage: FC<Todo> = () => {
  const [todos,setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] =useState("")

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos,
        {
          id: Date.now(),
          text: newTodo,
          completed: false,
        }])
        setNewTodo("")
  }
  }

    const toggleTodo = (id: number) => {
        setTodos(todos.map((todo) =>
          todo.id === id? {...todo, completed:!todo.completed } : todo
        ))
      }

    const deleteTodo = (id:number) =>{
      setTodos(todos.filter((todo) => todo.id!== id))
    }


  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">To do List</h1>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="flex-grow px-4 py-2 mr-2 border rounded-lg focus:outline-none"
          placeholder="Add a new task"
        />
        <button
          onClick={addTodo}
          className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      <div className="space-y-2">
        {todos?.map((todo: any) => {
          return (
            <TodoProps
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          );
        })}
      </div>
    </div>
  )
}

export default TodoPage