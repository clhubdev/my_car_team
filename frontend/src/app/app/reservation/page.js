import RouteCard from '@/app/components/RouteCard/RouteCard';
import styles from './page.module.css';

export default function reservation() {
    return (
        <div className={styles.reservation}>
            <h1>Trouver un trajet</h1>
            <RouteCard />
            <RouteCard />
            <RouteCard />
            <RouteCard />
        </div>
    )
}