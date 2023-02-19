import { SearchBar } from '@/shared/ui/SearchBar';
import Image from 'next/image';
import BearGuyPhone from '../../../public/images/bear-guy-phone-1.png';
import styles from './Home.module.scss';

export default function Home() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <Image src={BearGuyPhone} alt="Bear Guy Phone" className={styles.image} />
        <div className={styles.imageBg} />

        <p className={styles.title}>We learn.</p>
        <p className={styles.title}>We understand.</p>
        <p className={styles.title}>
          We <span className={styles.accent}>deliver jobs.</span>
        </p>
        <p className={styles.subtitle}>Personalizing each and every search for millions of job seekers</p>

        <SearchBar />
      </div>
    </section>
  );
}
