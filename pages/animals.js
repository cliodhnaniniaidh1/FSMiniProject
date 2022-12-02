import flamingo from '../images/flamingo.jpeg'
import koala from '../images/koala.jpeg'
import panda from '../images/panda.webp'
import tiger from '../images/tiger.webp'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Page.module.css'
import HeaderComponent from './components/Header';

function animals(){

  return (
    <div className={styles.container}>
      <HeaderComponent></HeaderComponent>
      <div className={styles.main}>
        <h3>Click on the Animal to learn more!</h3>
        <div className={styles.grid}>
          <a className={styles.card}>
            <h2>Flamingo &rarr;</h2>
            <Image 
              src={flamingo}
              alt="Picture of a Flamingo"
              width={400}
              height={400}
              />
          </a>

          <a className={styles.card}>
            <h2>Koala &rarr;</h2>
            <Image 
              src={koala}
              alt="Picture of a Koala"
              width={400}
              height={400}
              />
          </a>

          <a className={styles.card}>
            <h2>Panda &rarr;</h2>
            <Image 
              src={panda}
              alt="Picture of a Panda"
              width={400}
              height={400}
              />
          </a>

          <a className={styles.card}>
            <h2>Tiger &rarr;</h2>
            <Image 
              src={tiger}
              alt="Picture of a Tiger"
              width={400}
              height={400}
              />
          </a>
        </div>
        <div className={styles.button}>
            <Link href='/'>Home</Link>
        </div>
      </div>
      <footer className={styles.footer}>
        <p>Full Stack MiniProject</p>
      </footer>
    </div>
    );
}


export default animals