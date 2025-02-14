import styles from './sideNavBar.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function SideNavBar() {
    return (
        <nav className={styles.sideNavBar}>
            <div className={styles.logoContainer}>
                <Link href='/app' className={styles.logoLink}>
                    <Image
                        src="/logo.svg"
                        alt="Logo de l'application"
                        fill
                    />
                </Link>
            </div>

            <ul className={styles.navLinks}>
                <li>
                    <Link href="/">
                        Accueil
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        À propos
                    </Link>
                </li>
                <li>
                    <Link href="/services">
                        Services
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    )
}