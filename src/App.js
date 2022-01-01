import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

//array de cards
const initialTodos = [
  {
    id: "1",
    title: "Todo #1",
    description: "Desc Todo #1",
    completed: false,
  },
  {
    id: "2",
    title: "Todo #2",
    description: "Desc Todo #2",
    completed: true,
  },
];

const localTodos = JSON.parse(localStorage.getItem('todos'));

function App() {

  const [todos, setTodos] = useState(localTodos || initialTodos);
  const [todoEdit, setTodoEdit] = useState(null);

  useEffect(() => {

    localStorage.setItem('todos', JSON.stringify(todos));

  }, [todos])

  //funcion borrar tarea
  const todoDelete = (todoId) => {

    if(todoEdit && todoId === todoEdit.id) {
      setTodoEdit(null);
    }

    const changedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(changedTodos);
  };

  //funcion terminar tarea
  const todoToogleCompleted = (todoId) => {
    const changedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );

    setTodos(changedTodos);
  };

  //funcion para agregar tarea
  const todoAdd = (todo) => {
    const newTodo = {
      id: Date.now(),
      ...todo,
      completed: false,
    };

    const changedTodos = [newTodo, ...todos];

    setTodos(changedTodos);
  };

  const todoUpdate = (todoEdit) => {
    const changedTodos = todos.map((todo) =>
      todo.id === todoEdit.id ? todoEdit : todo
    );

    setTodos(changedTodos);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-8">
          <TodoList
            todos={todos}
            todoDelete={todoDelete}
            todoToogleCompleted={todoToogleCompleted}
            setTodoEdit={setTodoEdit}
          />
        </div>
        <div className="col-4">
          <Form
            todoAdd={todoAdd}
            todoEdit={todoEdit}
            todoUpdate={todoUpdate}
            setTodoEdit={setTodoEdit}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
