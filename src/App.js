import React, { useState } from 'react';

/// Modifica el componente para que se puedan agregar tareas

function App() {

  const [tarea, guardarTarea] = useState({
    nombre: ''
  })

  const {nombre} = tarea;

  const [task, getTask] = useState([]);


    const handleChange = e => {
      guardarTarea({
          [e.target.name] : e.target.value
      })
  }

    const agregarTarea = (e) =>{
      e.preventDefault();

      getTask([...task, tarea.nombre]);

      guardarTarea({
        nombre: ''
      });
    }

    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            <li>Sacar la ropa</li>
            <li>Hacer la cama</li>
            <li>Leer un rato</li>
            { task.map((li)=><li>{li}</li>)}
          </ul>
           <form
            onSubmit={agregarTarea}
           >
             <input type="text" id="new-task" name="nombre" value={nombre} placeholder="Ingresa una tarea y oprime Enter"
              onChange={handleChange}
             />
           </form>
        </div>
      </div>
    )
  
}


export default App;
