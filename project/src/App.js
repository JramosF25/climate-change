
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormularioGanado from './components/FormularioGanado';
import ListaGanado from './components/ListaGanado';
import useAlmacenamientoLocal from './hooks/useAlmacenamientoLocal';

const App = () => {
  const [ganado, setGanado] = useAlmacenamientoLocal('ganado', []);

  const agregarGanado = (nuevoGanado) => {
    setGanado([...ganado, nuevoGanado]);
  };

  return (
    <div className="container">
      <h1>Registro de Ganado</h1>
      <FormularioGanado agregarGanado={agregarGanado} />
      <ListaGanado ganado={ganado} />
    </div>
  );
};

export default App;
