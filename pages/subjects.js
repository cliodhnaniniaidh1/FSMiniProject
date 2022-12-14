import Image from 'next/image'
import maths from '../images/maths.png'
import english from '../images/english.png'
import science from '../images/science.png'
import histroy from '../images/history.png'
import Link from 'next/link'
import styles from '../styles/Page.module.css'
import HeaderComponent from './components/Header';
import Popup from '../layout/popup/Popup'

export default function subjects(){
  return (
    <div className={styles.container}>
      <HeaderComponent></HeaderComponent>
      <div className={styles.main}>
        <h3>Click on the Subject to learn more!</h3>
        <div className={styles.grid}>
          <a className={styles.card}>
            <h2>Maths &rarr;</h2>
            <Image 
              src={maths}
              alt="Maths logo"
              width={400}
              height={400}
              />
            <Popup
               description = "This is Maths"
               />
          </a>

          <a className={styles.card}>
            <h2>English &rarr;</h2>
            <Image 
              src={english}
              alt="English logo"
              width={400}
              height={400}
              />
             <Popup
               description = "This is English"
               />
          </a>

          <a className={styles.card}>
            <h2>Science &rarr;</h2>
            <Image 
              src={science}
              alt="Science logo"
              width={400}
              height={400}
              />
              <Popup
               description = "This is Science"
               />
          </a>

          <a className={styles.card}>
            <h2>History &rarr;</h2>
            <Image 
              src={histroy}
              alt="History logo"
              width={400}
              height={400}
              />
              <Popup
               description = "This is History"
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





