'use client';

import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../Button/Button';
import Link from '../Link/Link';
import styles from './LoginForm.module.css';

interface LoginInput {
  email: string;
  password: string;
}

const LoginForm = () => {
  const { register, handleSubmit } = useForm<LoginInput>();

  const onSubmit = handleSubmit((data) => {});

  return (
    <div className={styles.container}>
      <form onSubmit={onSubmit} className={styles.form}>
        <Input
          placeholder='メールアドレス'
          type='text'
          {...register('email')}
        />
        <Input
          placeholder='パスワード'
          type='password'
          {...register('password')}
        />
        <Button className={styles.button}>ログイン</Button>
      </form>
      <div className={styles.signUp}>
        新規登録は<Link href='/signup'>こちら</Link>
      </div>
    </div>
  );
};

//以下、ログインフォーム専用Inputコンポーネント
interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  placeholder: string;
  type: 'text' | 'password';
}

const Input = ({ placeholder, type, ...props }: InputProps) => {
  return (
    <input
      {...props}
      placeholder={placeholder}
      type={type}
      className={styles.input}
    />
  );
};

export default LoginForm;
