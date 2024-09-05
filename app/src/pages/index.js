// pages/index.js
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Bienvenido a Pet panchi</h1>
      <p className={styles.ppp}>Visita nuestras páginas:</p>
      <ul className={styles.uul}>
        <li className={styles.lii}>
          <Link href="/quienes-somos">Quienes Somos</Link>
        </li>
        <li className={styles.lii}>
          <Link href="/reservas">Reservas</Link>
        </li>
        <li className={styles.lii}>
          <Link href="/contacto">Contacto</Link>
        </li>
      </ul>
    </div>
  );
}
