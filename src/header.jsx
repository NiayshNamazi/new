import styles from './header.module.css';

function Header() {
  return (
      <div className={styles.header}>
        <div className={styles.header_title}>SmartVest</div>
        <div className={styles.navbar}>
          <div className={styles.navlink}>درباره ما</div>
          <div className={styles.navlink}>دسته بندی ها</div>
          <div className={styles.navlink}>خانه</div>
        </div>
      </div>
  );
}

export default Header;