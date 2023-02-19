import { Button } from '../Button';
import { Marker, Zoom } from '../Icons';
import styles from './SearchBar.module.scss';

function SearchBar() {
  return (
    <div role="searchbox" className={styles.wrapper}>
      <Zoom width={20} height={20} />
      <input role="search" placeholder="search jobs, keywords, companies" className={styles.input} />
      <div role="separator" className={styles.divider} />
      <Marker width={13} height={20} />
      <input role="search" placeholder="Enter location or “remote”" className={styles.input} />
      <Button>Search Jobs</Button>
    </div>
  );
}

export { SearchBar };
