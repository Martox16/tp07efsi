// pages/contacto.js
import React from 'react';

import styles from '../styles/Contacto.module.css';

export default function Contacto() {
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Contacto</h1>
      <p className={styles.texto}>
        Si tienes alguna pregunta o necesitas más información, no dudes en ponerte en contacto con nosotros.
        <br /><br />
        <strong>Teléfono:</strong> <a href="https://www.youtube.com/watch?v=1IWvyq89G5E" className={styles.link}>11 5656 5656</a>
        <br /><br />
        <strong>Redes Sociales:</strong>
        <br />
        <a href="https://www.youtube.com/watch?v=1IWvyq89G5E" target="_blank" rel="noopener noreferrer" className={styles.link}>Instagram: PanchisPet</a>
        <br />
        <a href="https://www.youtube.com/watch?v=1IWvyq89G5E" target="_blank" rel="noopener noreferrer" className={styles.link}>Facebook: PanchisPet</a>
      </p>
    </div>
  );
}
