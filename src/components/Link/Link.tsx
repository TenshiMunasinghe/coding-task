import _Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';
import styles from './Link.module.css';

interface Props extends LinkProps {
  children: ReactNode;
}

const Link = ({ children, ...props }: Props) => {
  return (
    <_Link className={styles.link} {...props}>
      {children}
    </_Link>
  );
};

export default Link;
