import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const FormularioGanado = ({ agregarGanado }) => {
  const [cantidad, setCantidad] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [zona, setZona] = useState('verde');

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarGanado({ cantidad, ciudad, zona });
    setCantidad('');
    setCiudad ('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="cantidad">
        <Form.Label>Cantidad de ganado</Form.Label>
        <Form.Control
          type="number"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
          placeholder="Ingrese la cantidad de ganado"
        />
      </Form.Group>
      <Form.Group controlId="ciudad">
        <Form.Label>Ciudad</Form.Label>
        <Form.Control
          type="text"
          value={ciudad}
          onChange={(e) => setCiudad(e.target.value)}
          placeholder="Ingrese la ciudad se encuentra el ganado"
        />
      </Form.Group>
      <Form.Group controlId="zona">
        <Form.Label>Zona</Form.Label>
        <Form.Control as="select" value={zona} onChange={(e) => setZona(e.target.value)}>
          <option value="verde">Verde</option>
          <option value="roja">Roja</option>
        </Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit">Registrar</Button>
    </Form>
  );
};

export default FormularioGanado;