import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import styles from './Button.module.css';

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
}

const Button = ({ children, className, ...props }: Props) => {
  return (
    <button
      className={styles.button + (className ? ` ${className}` : '')}
      {...props}>
      {children}
    </button>
  );
};

export default Button;
