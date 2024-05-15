import styles from './footer.module.css';
import mySvg from './facebook.svg';
import myySvg from './instagram.svg';
import myyySvg from './send-2.svg';



function Footer() {
  return (
      <div className={styles.footer}>
        <div className={styles.footer_icon}>
          <div className={styles.footer_icon_a}>
          <img className={styles.svg} src={mySvg}/>
          </div>
          <div className={styles.footer_icon_a}>
          <img className={styles.svg} src={myySvg}/>
          </div>
          <div className={styles.footer_icon_a}>
            <img className={styles.svg} src={myyySvg}/>
          </div>
        </div>
        <div className={styles.footer_text}>
          <div className={styles.footer_text1}>اسمارت وست</div>
          <div className={styles.footer_text1}>پشتیبانی و قوانین</div>
          <div className={styles.footer_text1}>درباره اسمارت وست</div>
        </div>
      </div>
  );
}

export default Footer;