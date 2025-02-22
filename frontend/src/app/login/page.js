import LoginForm from "../components/LoginForm/LoginForm";
import Link from "next/link";
import styles from "./page.module.css";
import TopNav from "../components/TopNav/TopNav";

export default function Login() {

    return (
        <>
            <header className={styles.header}>
                <TopNav />
            </header>

            <main className="flex-grow flex flex-col w-full items-center">
                <LoginForm />

                <Link href="/register">
                    <div>
                        Vous avez pas de compte ? Inscrivez-vous
                    </div>
                </Link>
            </main>
        </>
    )
}