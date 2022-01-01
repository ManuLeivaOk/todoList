import React from "react";

function Todo({todo, todoDelete, todoToogleCompleted, setTodoEdit}) {

  return (
    <div>
      <div className="card mt-2 mb-2">
        <div className="card-body">
          <div className="card-title fs-1 text-end ">
            {todo.title}
            <button 
            className={`btn btn-sm ${todo.completed ? 'btn-outline-success' : 'btn-success'} ms-2`}
            onClick={() => todoToogleCompleted(todo.id)}>
              { todo.completed ? "Terminada" : "Terminar"}
            </button>
          </div>
          <div className="card-text fs-4 text-end">{todo.description}</div>
          <hr></hr>
          <div className="d-flex justify-content-end">
            <button className="btn btn-sm btn-outline-primary me-2" onClick={() => setTodoEdit(todo)}>
              Editar
            </button>
            <button 
            className="btn btn-sm btn-outline-danger"
            onClick={() => todoDelete(todo.id)}
            >Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
