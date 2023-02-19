import Image from 'next/image';
import Link from 'next/link';
import JobsBearLogo from '../../../../public/images/JobsBearLogo.svg';
import { Chevron } from '../Icons';
import styles from './Nav.module.scss';

const pages = [
  { href: '/#about', text: 'About us' },
  { href: '/#jobs', text: 'View jobs' },
  { href: '/#blog', text: 'Blog' },
];

function Nav() {
  return (
    <nav role="navigation" aria-label="Main" className={styles.nav}>
      <ul>
        <li>
          <Link href="/">
            <Image src={JobsBearLogo} alt="Jobs Bear Logo" />
          </Link>
        </li>

        {pages.map((page) => (
          <li key={page.href} className={styles.navLink}>
            <Link href={page.href}>{page.text}</Link>
          </li>
        ))}

        <div className={styles.langSelector} role="region">
          <span>EN</span>
          <Chevron />
        </div>
      </ul>
    </nav>
  );
}

export { Nav };
