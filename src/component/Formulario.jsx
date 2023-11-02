import React from 'react'
import { useState } from 'react'

const Formulario = () => {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.length < 3 || name.startsWith(' ')) {
      alert('Por favor ingrese un nombre válido');
    } else if (color.length < 6) {
      alert('Por favor ingrese un color válido');
    } else {
      console.log(`Name: ${name}, Color: ${color}`);
    }
};
  return (
    <form 
    onSubmit={handleSubmit}>
      <label>
        Elige un color:
        <br />
        Ingresa tu nombre:
        <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Ingresa tu color favorito (formato HEX):
        <input 
        type="text" 
        value={color} 
        onChange={(e) => setColor(e.target.value)} />
      </label>
      <br />
      <button type="submit">ENVIAR</button>
    </form>
  )
}

export default Formulario