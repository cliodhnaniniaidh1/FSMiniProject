import Link from 'next/link'
import styles from '../../styles/Home.module.css'
function HeaderComponent(){
    return(
        <header>
            <div className={styles.header}>
                <Link href='/animals'>Animals</Link>
                <Link href='/subjects'>Subjects</Link>
                <Link href='/jobs'>Jobs</Link>
                <Link href='/vehicles'>Vehicles</Link>
            </div>
        </header>
    )
}
export default HeaderComponent;

