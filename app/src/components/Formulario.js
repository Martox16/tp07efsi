import { useState } from 'react';
import styles from '../styles/Formulario.module.css';

export default function Formulario({ agregarCita }) {
  const [formData, setFormData] = useState({
    mascota: '',
    dueño: '',
    fecha: '',
    hora: '',
    sintomas: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarCita(formData);
    setFormData({
      mascota: '',
      dueño: '',
      fecha: '',
      hora: '',
      sintomas: ''
    });
  };

  return (
    <form className={styles.padreFormulario} onSubmit={handleSubmit}>
      <label>Nombre Mascota</label>
      <input type="text" name="mascota" value={formData.mascota} onChange={handleChange} placeholder="Nombre mascota" />

      <label>Nombre Dueño</label>
      <input type="text" name="dueño" value={formData.dueño} onChange={handleChange} placeholder="Nombre dueño de la mascota" />

      <label>Fecha</label>
      <input type="date" name="fecha" value={formData.fecha} onChange={handleChange} />

      <label>Hora</label>
      <input name="hora" type="time" value={formData.hora} onChange={handleChange} />

      <label>Sintomas</label>
      <textarea name="sintomas" value={formData.sintomas} onChange={handleChange}></textarea>
      <div className={styles.botonjs}>
        <button type="submit">AGREGAR CITA</button>
      </div>
    </form>
  );
}
