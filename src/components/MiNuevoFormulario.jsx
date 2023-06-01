import React, { useState } from "react";
import Card from './Card';
import "../estilos/estilosForm.css"


function MiNuevoFormulario() {
  const [color, setColor] = useState("");
  const [nombre, setNombre] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (color.length < 3 || nombre.length < 6) {
      setError("Los campos no cumplen con los requisitos.");
      setSubmitted(false);
      return;
    }

    console.log("Color:", color);
    console.log("Nombre:", nombre);
    setSubmitted(true);
    setError("");
  };

  const enviarDatos = (color, nombre) => {
   
    console.log('Enviando datos al componente Card:', color, nombre);
  };

  return (
    <form onSubmit={handleSubmit} className='container'>
      <div className='form__box'>
        <label htmlFor="colorInput"  className='form_label'>Color: </label>
        <input
          type="text"
          id="colorInput"
          value={color}
          onChange={(event) => setColor(event.target.value)}
          className='form__input'      
          placeholder=' '  
        />

 

      </div>
      <div  className='form__box'>

        <label htmlFor="nombreInput" className='form_label'>Nombre: </label>
        <input
          type="text"
          id="nombreInput"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
          className='form__input'      
          placeholder=' '  
        />
      </div>
      <button type="submit">Enviar</button>
      {error && !submitted && <p>{error}</p>} {/* Mostrar mensaje de error si existe y no se ha enviado */}
      {submitted && color && nombre && !error && <Card color={color} nombre={nombre} />} {/* Renderizar el componente Card si se ha enviado correctamente */}
    </form>
  );
}

export default MiNuevoFormulario;