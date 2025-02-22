import styles from './sideNavBar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import UserCard from '../UserCard/UserCard';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function SideNavBar() {
    return (
        <>
            <div className={styles.mobileNavBar}>
                <PersonIcon sx={{ color: 'white' }}/>
                <HomeIcon sx={{ color: 'white' }}/>
                <LocationOnIcon sx={{ color: 'white' }}/>
            </div>
            
            <div className={styles.sideNavBar}>
                <div className={styles.logoContainer}>
                    <Link href='/app' className={styles.logoLink}>
                        <Image
                            src="/logo.svg"
                            alt="Logo de l'application"
                            priority
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

                <div className={styles.userCardContainer}>
                    <UserCard />
                </div>
            </div>
        </>
    )
}