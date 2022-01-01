import React from "react";
import Todo from "./Todo";

function TodoList({ todos, todoDelete, todoToogleCompleted, setTodoEdit }) {
  return (
    <div>
      <h2 className='text-center display-4'>Lista de tareas</h2>

      {
        todos.length === 0 
        ? ( <div className="alert alert-primary text-center">De momento, no hay tareas. Puedes agregar una.</div>
        ) 
        : (
            todos.map(todo => (
              <Todo
                todo={todo}
                key={todo.id}
                todoDelete={todoDelete}
                todoToogleCompleted={todoToogleCompleted}
                setTodoEdit={setTodoEdit}
              />
            ))
      )}
    </div>
  );
}

export default TodoList;
