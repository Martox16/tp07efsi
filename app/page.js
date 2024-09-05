import React, { useState, useEffect } from 'react';
import Subtitulo from './src/components/Subtitulo.js';
import Formulario from './src/components/Formulario.js';
import Turno from './src/components/Turno.js';

function Confirm({ message, onCancel, onConfirm }) {
  return (
    <div className="confirm-modal">
      <p>{message}</p>
      <button onClick={onCancel}>Cancelar</button>
      <button onClick={onConfirm}>Confirmar</button>
    </div>
  );
}

function App() {
  const [citas, setCitas] = useState([]);
  const [confirmAddVisible, setConfirmAddVisible] = useState(false);
  const [confirmDeleteVisible, setConfirmDeleteVisible] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);
  const [citaToAdd, setCitaToAdd] = useState(null);

  // Guardar citas en localStorage
  const guardarEnLocalStorage = (citas) => {
    localStorage.setItem('citas', JSON.stringify(citas));
  };

  // Agregar una cita y guardarla en localStorage
  const handleConfirmAdd = () => {
    const nuevasCitas = [...citas, citaToAdd];
    setCitas(nuevasCitas);
    guardarEnLocalStorage(nuevasCitas);
    setConfirmAddVisible(false);
    setCitaToAdd(null);
  };

  // Eliminar una cita y actualizar localStorage
  const handleConfirmDelete = () => {
    const citasActualizadas = citas.filter(cita => cita.id !== idToDelete);
    setCitas(citasActualizadas);
    guardarEnLocalStorage(citasActualizadas);
    setConfirmDeleteVisible(false);
    setIdToDelete(null);
  };

  // Cargar citas desde localStorage al iniciar la app
  useEffect(() => {
    const citasGuardadas = JSON.parse(localStorage.getItem('citas'));
    if (citasGuardadas) {
      setCitas(citasGuardadas);
    }
  }, []);

  return (
    <>
      <div className='titulo'>
        <h1>ADMINISTRADOR DE PACIENTES</h1>
      </div>

      <div className='container'>
        <div className='columnaForm'>
          <Subtitulo texto={"CREAR MI CITA"} />
          <Formulario agregarCita={agregarCita} />
        </div>

        <div className='columnaCita'>
          <Subtitulo texto={"ADMINISTRA TUS CITAS"} />
          <div className='columnaTurno'>
            <Turno citas={citas} eliminarCita={eliminarCita} />
          </div>
        </div>
      </div>

      {confirmAddVisible && (
        <Confirm
          message="¿Estás seguro de que deseas agregar esta cita?"
          onCancel={handleCancelAdd}
          onConfirm={handleConfirmAdd}
        />
      )}

      {confirmDeleteVisible && (
        <Confirm
          message="¿Estás seguro de que deseas eliminar esta cita?"
          onCancel={handleCancelDelete}
          onConfirm={handleConfirmDelete}
        />
      )}
    </>
  );
}

export default App;
