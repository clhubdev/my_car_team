import styles from "./card.module.css";
import Image from 'next/image';

export default function Card(props) {
    return (
        <div className={styles.card} style={{ border: 'solid 5px #C14953' }}>
            <div className={styles.cardInner}>
                <div className={styles.iconContainer}>
                    <Image
                        src={props.img}
                        width={200}
                        height={200}
                        alt={props.alt}
                        className={styles.heroImg}
                    />
                    <h2 className={styles.title}>{props.title}</h2>
                </div>
                <div className={styles.textContainer}>
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    )
}