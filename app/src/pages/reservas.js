import { useState } from 'react';
import Formulario from '../components/Formulario';
import Turno from '../components/Turno';
import Subtitulo from '../components/Subtitulo';

export default function Reservas() {
  const [citas, setCitas] = useState([]);

  const agregarCita = (nuevaCita) => {
    setCitas([...citas, { ...nuevaCita, id: Date.now() }]);
  };

  const eliminarCita = (id) => {
    setCitas(citas.filter(cita => cita.id !== id));
  };

  return (
    <div className="container">
      <div className="columnaForm">
        <Subtitulo texto="CREAR MI CITA" />
        <Formulario agregarCita={agregarCita} />
      </div>
      <div className="columnaCita">
        <Subtitulo texto="ADMINISTRA TUS CITAS" />
        <Turno citas={citas} eliminarCita={eliminarCita} />
      </div>
    </div>
  );
}
