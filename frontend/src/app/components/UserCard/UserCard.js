'use client';

import styles from './userCard.module.css';
import apiClient from '../../../../services/api.js';
import { useRouter } from 'next/navigation';

export default function UserCard({ user }) {
    const router = useRouter();

    async function handleLogout() {
        try {
            await apiClient.post('/user/logout', {});
            router.push('/login');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className={styles.userCard}>
            {/* <h2>{user.firstName} {user.lastName}</h2>
            <p>{user.email}</p> */}
            <button onClick={handleLogout}>Déconnexion</button>
        </div>
    );
}