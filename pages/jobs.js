import Image from 'next/image'
import styles from '../styles/Page.module.css'
import HeaderComponent from './components/Header';
import vet from '../images/vet.png'
import nurse from '../images/nurse.png'
import teacher from '../images/teacher.png'
import guard from '../images/guard.png'
import Link from 'next/link'

export default function jobs(){
  return (
    <div className={styles.container}>
      <HeaderComponent></HeaderComponent>
      <div className={styles.main}>
      <div className={styles.button}>
            <Link href='/'>Home</Link>
        </div>
        <h3>Click on the Job to learn more!</h3>
        <div className={styles.grid}>
          <a className={styles.card}>
            <h2>Vet &rarr;</h2>
            <Image 
              src={vet}
              alt="Vet image"
              width={400}
              height={400}
              />
          </a>

          <a className={styles.card}>
            <h2>Nurse &rarr;</h2>
            <Image 
              src={nurse}
              alt="Nurse image"
              width={400}
              height={400}
              />
          </a>

          <a className={styles.card}>
            <h2>Teacher &rarr;</h2>
            <Image 
              src={teacher}
              alt="Teacher image"
              width={400}
              height={400}
              />
          </a>

          <a  className={styles.card}>
            <h2>Guard &rarr;</h2>
            <Image 
              src={guard}
              alt="Guard image"
              width={400}
              height={400}
              />
          </a>
        </div>
      </div>
      <footer className={styles.footer}>
        <p>Full Stack MiniProject</p>
      </footer>
    </div>
    );
}





