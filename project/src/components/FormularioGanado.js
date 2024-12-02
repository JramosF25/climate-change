import React, { useState } from 'react';
import { Form, Button, Row, Col } from "react-bootstrap";

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

//   return (

//     <Form onSubmit={handleSubmit}>
//       <Form.Group controlId="cantidad">
//         <Form.Label>Cantidad de ganado</Form.Label>
//         <Form.Control
//           type="number"
//           value={cantidad}
//           onChange={(e) => setCantidad(e.target.value)}
//           placeholder="Ingrese la cantidad de ganado"
//         />
//       </Form.Group>
//       <Form.Group controlId="ciudad">
//         <Form.Label>Ciudad</Form.Label>
//         <Form.Control
//           type="text"
//           value={ciudad}
//           onChange={(e) => setCiudad(e.target.value)}
//           placeholder="Ingrese la ciudad se encuentra el ganado"
//         />
//       </Form.Group>
//       <Form.Group controlId="zona">
//         <Form.Label>Zona</Form.Label>
//         <Form.Control as="select" value={zona} onChange={(e) => setZona(e.target.value)}>
//           <option value="verde">Verde</option>
//           <option value="roja">Roja</option>
//         </Form.Control>
//       </Form.Group>
//       <Button variant="primary" type="submit" mt-3>Registrar</Button>
//     </Form>
//   );
// };

return (
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3 justify-content-md-center" >
        <Col md={6}>
          <Form.Group controlId="cantidad">
            <Form.Label>Cantidad de ganado</Form.Label>
            <Form.Control
              type="number"
              value={cantidad}
              onChange={(e) => setCantidad(e.target.value)}
              placeholder="Ingrese la cantidad de ganado"
              min="1"
              required
            />
          </Form.Group>
        </Col>
      </Row>
        <Row className="mb-3 justify-content-md-center">
            <Col md={6}>
            <Form.Group controlId="ciudad">
                <Form.Label>Ciudad</Form.Label>
                <Form.Control
                type="text"
                value={ciudad}
                onChange={(e) => setCiudad(e.target.value)}
                placeholder="Ingrese la ciudad donde se encuentra el ganado"
                required
                />
            </Form.Group>
            </Col>
        </Row>
      <Row className="mb-3 justify-content-md-center">
        <Col md={6}>
          <Form.Group controlId="zona">
            <Form.Label>Zona</Form.Label>
            <Form.Control as="select" value={zona} onChange={(e) => setZona(e.target.value)} required>
              <option value="verde">Verde</option>
              <option value="roja">Roja</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>

    <div className="d-flex justify-content-center">
        <Button variant="primary" type="submit" className="mt-3 w-50">
            Registrar
        </Button>
    </div>
    </Form>
  );
};

export default FormularioGanado;