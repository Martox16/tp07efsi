import styles from '../styles/Turno.module.css';

export default function Turno({ citas, eliminarCita }) {
  return (
    <div className={styles.padrejs}>
      {citas.map(cita => (
        <div key={cita.id} className={styles.cartinscky}>
          <p><span className={styles.spanP}>Mascota:</span> {cita.mascota}</p>
          <p><span className={styles.spanP}>Dueño:</span> {cita.dueño}</p>
          <p><span className={styles.spanP}>Fecha:</span> {cita.fecha}</p>
          <p><span className={styles.spanP}>Hora:</span> {cita.hora}</p>
          <p><span className={styles.spanP}>Sintomas:</span> {cita.sintomas}</p>
          <button className={styles.btnTurno} onClick={() => eliminarCita(cita.id)}>Eliminar × </button>
        </div>
      ))}
    </div>
  );
}
