'use client';
import styles from './page.module.css';
import Link from 'next/link';


export default function Dashboard() {
    return (
        <div className={styles.dashboard}>
            <h1>Tableau de bord</h1>

            <div className={styles.actions}>
                <Link href='/app/nouveau-trajet' className={styles.link}>
                    <button>
                        Créer un trajet
                    </button>
                </Link>

                <Link href='/app/reservation'>
                    <button>
                        Trouver un trajet
                    </button>
                </Link>
            </div>
        </div>
    )
}
