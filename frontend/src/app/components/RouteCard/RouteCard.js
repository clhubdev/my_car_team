import styles from './routeCard.module.css';
import FlagIcon from '@mui/icons-material/Flag';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

export default function RouteCard() {
    return (
        <div className={styles.routeCard}>
            <div className={styles.infosContainer}>
                <div className={styles.infosRoute}>
                    <div className={styles.startEndInfos}>
                        <div>
                            <p>Date/Heure</p>
                            <p>Lieu</p>
                        </div>
                        <FlagIcon fontSize="large" />
                    </div>

                    <div className={styles.routeLine}>
                        <div className={styles.line}></div>
                        <DirectionsCarIcon fontSize="large" />
                        <div className={styles.line}></div>
                    </div>
                    
                    <div className={styles.startEndInfos}>
                        <SportsScoreIcon fontSize="large" />
                        <div>
                            <p>Date/Heure</p>
                            <p>Lieu</p>
                        </div>
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