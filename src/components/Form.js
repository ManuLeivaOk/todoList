import React, { useState, useEffect } from "react";

const initialFormValues = {
  title: "",
  description: "",
};

function Form( {todoAdd, todoEdit, todoUpdate, setTodoEdit} ) {
  const [formValues, setFormValues] = useState(initialFormValues);
  const { title, description } = formValues;
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null)

  useEffect(() => {
      if(todoEdit){
        setFormValues(todoEdit);
      } else {
        setFormValues(initialFormValues);
      }
      

  }, [todoEdit])

  const handleInputChange = (e) => {
    const changedFormValues = {
        ...formValues,
        [e.target.name] : e.target.value
    }
    
    setFormValues(changedFormValues)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(title.trim() === '') {
        setError('Debes poner un titulo');
        return;
    }

    if(description.trim() === '') {
        setError ('Debes poner una descripcion');
        return;
    }

    if(todoEdit) {
        //editando tarea
        todoUpdate(formValues)
        setSuccessMessage('Editado con exito');
    } else {
        //agregando tarea
        todoAdd(formValues);
        setSuccessMessage('Agregado con exito');
        setFormValues(initialFormValues);
    }

    

    setTimeout(() => {setSuccessMessage(null)}, 2000)

    setError(null);
  }

  return (
    <div>
      <h2 className='text-center display-4'>{todoEdit ? 'Editar tarea' : 'Nueva tarea'}</h2>
      {
        todoEdit && <button className='btn btn-sm btn-warning mb-2' onClick={() => setTodoEdit(null)}>Cancelar edicion</button>
      }
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titulo"
          className="form-control fondoForm"
          value={title}
          name="title"
          onChange={handleInputChange}
        />
        <textarea
          placeholder="Descripcion"
          className="form-control mt-2 fondoForm"
          value={description}
          name="description"
          onChange={handleInputChange}
        />
        <div className="d-grid gap-2">
          <button className="btn btn-primary mt-2 mb-2 botonForm">{ todoEdit ? 'Editar tarea' : 'Agregar tarea'}</button>
        </div>
      </form>

        {
            error && (<div className='alert alert-danger mt-2 text-center'>{ error }</div>)
        }
        {
            successMessage && (
                <div className='alert alert-success mt-2 text-center'>{ successMessage }</div>
            )
        }
      
    </div>
  );
}

export default Form;
