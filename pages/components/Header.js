import Link from 'next/link'
import styles from '../../styles/Home.module.css'
function HeaderComponent(){
    return(
        <header>
            <div className={styles.header}>
            <li>
                <Link href='/animals'>Animals</Link>
            </li>
            <li>
                <Link href='/subjects'>Subjects</Link>
            </li>
            <li>
                <Link href='/jobs'>Jobs</Link>
            </li>
            <li>
                <Link href='/vehicles'>Vehicles</Link>
            </li>
            </div>
        </header>
    )
}
export default HeaderComponent;

