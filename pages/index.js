import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import HeaderComponent from './components/Header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MiniProject</title>
      </Head>
      <HeaderComponent></HeaderComponent>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Spraoi!
        </h1>

        <p className={styles.description}>
          Get started by selecting one of the groups below!
        </p>

        <div className={styles.grid}>
          <a className={styles.card}>
            <Link href='/animals'>
              <h2>Animals &rarr;</h2>
            <p>Learn about different animals!</p>
            </Link>
          </a>

          <a className={styles.card}>
            <Link href='/subjects'>
              <h2>Subjects &rarr;</h2>
              <p>
                Learn about new school subjects!
              </p>
            </Link>
          </a>

          <a className={styles.card}>
            <Link href='/subjects'>
              <h2>Jobs &rarr;</h2>
              <p>Learn about different jobs!</p>
            </Link>
          </a>

          <a className={styles.card}>
            <Link href='/subjects'>
              <h2>Vehicles &rarr;</h2>
              <p>Compare different Vehicles!</p>
            </Link>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Full Stack MiniProject</p>
      </footer>
    </div>
  )
}