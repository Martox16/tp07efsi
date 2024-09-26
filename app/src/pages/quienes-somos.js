import Titulo from '../components/Titulo';
import styles from '../styles/Quienes.module.css'; // Asegúrate de que exista un archivo Home.module.css


export default function QuienesSomos() {
  return (
    <div>
      <p className={styles.tit}> ¿Quiénes somos?</p>
      <p className={styles.txt}>Desde 1995, en la esquina de Yatay y Díaz Vélez, hemos estado comprometidos con el bienestar y la salud de sus mascotas. En Panchis, nuestro equipo de veterinarios y especialistas se dedica a ofrecer un servicio de calidad para garantizar que sus compañeros peludos reciban el mejor cuidado posible..</p>
      <p className={styles.txt}> Creemos que cada mascota merece un trato personalizado y un entorno seguro y acogedor. Por eso, hemos desarrollado un sistema de citas que permite a los dueños de mascotas gestionar fácilmente sus visitas al veterinario, asegurando que cada consulta se realice sin prisas y con la atención que su mascota merece.</p>
      <p className={styles.txt}>Nuestro equipo está formado por profesionales apasionados que entienden la importancia de la relación entre una mascota y su dueño. Estamos aquí para apoyar esa conexión, ofreciendo servicios que incluyen consultas médicas, vacunaciones, cirugías menores, y asesoramiento nutricional.</p>
      <p className={styles.txt}>En Panchis, no solo tratamos a las mascotas, sino que también educamos a los dueños para que puedan cuidar mejor a sus compañeros en casa. Nuestro objetivo es ser su socio de confianza en todas las etapas de la vida de su mascota.</p>
      <p className={styles.txt}>Nos enorgullece ser parte de la comunidad y estamos agradecidos por la confianza que nos han brindado durante todos estos años. ¡Esperamos seguir cuidando de sus mascotas por muchos años más!</p>

    </div>
  );
}
