import styles from './page.module.css';
import RoutesList from '../../components/RoutesList/RoutesList.js';

export default function Reservation() {
    return (
        <div className={styles.reservation}>
            <h1>Trouver un trajet</h1> 
            <RoutesList />
        </div>
    )
}