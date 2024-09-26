import { useState, useEffect } from 'react';
import Formulario from '../components/Formulario';
import Turno from '../components/Turno';
import Subtitulo from '../components/Subtitulo';

export default function Reservas() {
  const [citas, setCitas] = useState([]);

  //localStorage
  useEffect(() => {
    const citasGuardadas = localStorage.getItem('citas');
    if (citasGuardadas) {
      setCitas(JSON.parse(citasGuardadas));
    }
  }, []);

  // Guardamos las citas en localStorage cada vez que cambia el estado de las citas
  useEffect(() => {
    if (citas.length > 0) {
      localStorage.setItem('citas', JSON.stringify(citas));
    }
  }, [citas]);

  const agregarCita = (nuevaCita) => {
    const nuevasCitas = [...citas, { ...nuevaCita, id: Date.now() }];
    setCitas(nuevasCitas);
  };

  const eliminarCita = (id) => {
    const citasActualizadas = citas.filter(cita => cita.id !== id);
    setCitas(citasActualizadas);
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
