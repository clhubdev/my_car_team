import styles from './routeCard.module.css';

export default function RouteCard() {
    return (
        <div className={styles.routeCard}>
            <div className={styles.infosContainer}>
                <div className={styles.infosRoute}>
                    <div>
                        <p>Date/Heure</p>
                        <p>Lieu</p>
                    </div>
                    <div>
                        -
                    </div>
                    <div>
                        <p>Date/Heure</p>
                        <p>Lieu</p>
                    </div>
                </div>
                <div className={styles.infosConductor}>
                    <p>Trajet proposé par lastname firstname</p>
                </div>
            </div>
            <div className={styles.reservationContainer}>
                <div className={styles.price}>
                    <p>55,48 €</p>
                </div>
                <button className={styles.reservationBtn}>Réserver</button>
            </div>
        </div>
    )   
}