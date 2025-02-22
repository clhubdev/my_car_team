import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";


export default function Footer() {
    return (
        <footer className={styles.footer}>

            <Image
                src="/logo.svg"
                alt="Logo de MyCarTeam"
                width={100}
                height={100}
                className={styles.logoImg}
            />

            <Link href="/">
                <h3 style={{ marginTop: '1rem' }}>MENTIONS LÉGALES</h3>
            </Link>

        </footer>
    )
}