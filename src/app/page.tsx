'use client';

import LoginForm from '@/components/loginForm/LoginForm';
import styles from './page.module.css';

const Home = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>ログイン</h1>
      <LoginForm />
    </main>
  );
};

export default Home;
