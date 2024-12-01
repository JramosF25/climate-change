import React from 'react';

const ListaGanado = ({ ganado }) => {
  const ganadoVerde = ganado.filter(g => g.zona === 'verde');
  const ganadoRojo = ganado.filter(g => g.zona === 'roja');

  return (
    <div>
      <h3>Ganado en Zona Verde</h3>
      <ul>
        {ganadoVerde.map((g, index) => (
          <li key={index}>{g.cantidad} - {g.ciudad}</li>
        ))}
      </ul>
      <h3>Ganado en Zona Roja</h3>
      <ul>
        {ganadoRojo.map((g, index) => (
          <li key={index}>{g.cantidad} - {g.ciudad}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaGanado;