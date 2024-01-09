'use client';

import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import btnStyles from '../Button/Button.module.css';
import styles from './SignUpForm.module.css';

interface SignUpInput {
  username: string;
  email: string;
  password: string;
  icon: File;
  dob: Date;
  gender: string;
  isAgreeToTaC: boolean;
}

const SignUpForm = () => {
  const { register, handleSubmit } = useForm<SignUpInput>();
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <FormElement htmlFor='username' label='ユーザー名'>
          <TextInput type='text' {...register('username')} />
        </FormElement>
        <FormElement htmlFor='email' label='メールアドレス'>
          <TextInput type='text' {...register('email')} />
        </FormElement>
        <FormElement htmlFor='password' label='パスワード'>
          <TextInput type='password' {...register('password')} />
        </FormElement>
        <FormElement htmlFor='icon' label='プロフィール画像'>
          <input
            type='file'
            className={styles.fileInput}
            id='icon'
            {...register('icon')}
          />
          <label
            htmlFor='icon'
            className={btnStyles.button + ' ' + styles.fileButton}>
            画像をアップロード
          </label>
        </FormElement>
        <FormElement htmlFor='dob' label='生年月日'>
          <input className={styles.input} type='date' {...register('dob')} />
        </FormElement>
        <FormElement label='性別'>
          <RadioInput
            value='male'
            label='男性'
            {...register('gender')}></RadioInput>
          <RadioInput
            value='female'
            label='女性'
            {...register('gender')}></RadioInput>
          <RadioInput
            value='other'
            label='その他'
            {...register('gender')}></RadioInput>
        </FormElement>
      </form>
    </div>
  );
};

//以下、サインアップ専用のコンポーネント
interface FormElementProps {
  htmlFor?: string;
  label?: string;
  children: ReactNode;
}

const FormElement = ({ htmlFor, label, children }: FormElementProps) => {
  return (
    <label htmlFor={htmlFor || ''} className={styles.inputContainer}>
      <span className={styles.label}>{label}</span>
      {children}
    </label>
  );
};

interface TextInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  type: 'text' | 'password';
}

const TextInput = ({ type, ...props }: TextInputProps) => {
  return <input {...props} type={type} className={styles.input} />;
};

interface RadioProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  value: string;
  label: string;
}

const RadioInput = ({ value, label, ...props }: RadioProps) => {
  return (
    <label htmlFor={value} className={styles.radioContainer}>
      <span>{label}</span>
      <input type='radio' value={value} {...props} />
    </label>
  );
};

export default SignUpForm;
