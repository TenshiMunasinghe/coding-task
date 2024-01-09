import SignUpForm from '@/components/signUpForm/SignUpForm';
import styles from './signUp.module.css';

const signUp = () => {
  return (
    <div className={styles.container}>
      <SignUpForm />
    </div>
  );
};

export default signUp;
