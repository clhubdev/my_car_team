import SideNavBar from '../components/SideNavBar/SideNavBar';
import styles from './layout.module.css';
import Link from 'next/link';

export default function AppLayout({ children }) {
    return (

        <div className={styles.appLayout}>
            <header>
                <SideNavBar />
            </header>

            <div className={styles.mainFooterContainer}>
                <main>{children}</main>
                <footer>
                    <div>
                        <p>©MyCarTeam</p>
                    </div>

                    <div>
                        <Link href="/">
                            Accueil
                        </Link>
                    </div>

                    <div>
                        <Link href="/">
                            Mentions légales
                        </Link>
                    </div>
                </footer>
            </div>
        </div>
    )
}