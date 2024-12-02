import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';


const ListaGanado = ({ ganado }) => {
  const ganadoVerde = ganado.filter(g => g.zona === 'verde');
  const ganadoRojo = ganado.filter(g => g.zona === 'roja');

return (
    <Container>
      <Row>
        <Col>
          <h3 className="text-center text-primary my-5">Ganado en Zona Verde</h3>
          <ListGroup>
          <ul>
            {ganadoVerde.map((g, index) => (
              <ListGroup.Item><li key={index}>{g.cantidad} - {g.ciudad}</li></ListGroup.Item>
            ))}
          </ul>
          </ListGroup>
        </Col>
        <Col>
          <h3 className="text-center text-primary my-5">Ganado en Zona Roja</h3>
          <ListGroup>
          <ul>
            {ganadoRojo.map((g, index) => (
              <ListGroup.Item><li key={index}>{g.cantidad} - {g.ciudad}</li></ListGroup.Item>
            ))}
          </ul>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default ListaGanado;