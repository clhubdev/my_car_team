import styles from "./topNav.module.css";
import Image from 'next/image';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';

export default function TopNav() {
    return (
        <nav className={styles.navbar}>
            <Link href="/">
                <Image
                    src="/logo.svg"
                    alt="Logo de MyCarTeam"
                    width={150}
                    height={50}
                />
            </Link>
            
            <div className={styles.actions}>
                <Link href="/" className={styles.homeIcon}>
                    <HomeIcon />
                </Link>
                <Link href="/login">
                    <div className={styles.contactBtn}>Se connecter</div>
                </Link>
            </div>
            
        </nav>
    )
}