import styles from '../styles/page.module.css'
import HeaderComponent from './components/Header';
import Image from 'next/image'
import lorry from '../images/lorry.png'
import motorbike from '../images/motorbike.png'
import car from '../images/car.png'
import tractor from '../images/tractor.png'
import Link from 'next/link'

export default function vehicles(){
  return (
    <div className={styles.container}>
      <HeaderComponent></HeaderComponent>
      <div className={styles.main}>
      <li>
          <Link href='/'>Home</Link>
        </li>
        <h3>Click on the Vehicle to learn more!</h3>
        <div className={styles.grid}>
          <a className={styles.card}>
            <h2>Lorry &rarr;</h2>
            <Image 
              src={lorry}
              alt="Lorry image"
              width={400}
              height={400}
              />
          </a>

          <a className={styles.card}>
            <h2>Motorbike &rarr;</h2>
            <Image 
              src={motorbike}
              alt="Motorbike image"
              width={400}
              height={400}
              />
          </a>

          <a className={styles.card}>
            <h2>Tractor &rarr;</h2>
            <Image 
              src={tractor}
              alt="Tractor image"
              width={400}
              height={400}
              />
          </a>

          <a className={styles.card}>
            <h2>Car &rarr;</h2>
            <Image 
              src={car}
              alt="Car image"
              width={400}
              height={400}
              />
          </a>
        </div>
      </div>
    </div>
    );
}





