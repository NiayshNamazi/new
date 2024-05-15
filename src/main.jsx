import styles from './main.module.css';
import arrowSvg from './arrow-circle-left.svg';
import image from './home.png';

function Main() {
  return (
      <div className={styles.box}>
        <div className={styles.boxtext}>
            <div className={styles.icon_text}>
            <div className={styles.icon}>
                    <img className={styles.icon_svg} src={arrowSvg}/>
                </div>
                <div className={styles.text}>مشاهده همه</div>
            </div>
            <div className={styles.text_title}>آگهی های پیشنهادی</div>
        </div>
        <div className={styles.card}>
            <div className={styles.card1}>
            <div>
                <img className={styles.img} src={image}/>
            </div>
            <div className={styles.card_text}>سهروردی شمالی،خیابان امیری</div>
            </div>
            <div className={styles.card1}>
            <div>
                <img className={styles.img} src={image}/>
            </div>
            <div className={styles.card_text}>سهروردی شمالی،خیابان امیری</div>
            </div>
            <div className={styles.card1}>
            <div>
                <img className={styles.img} src={image}/>
            </div>
            <div className={styles.card_text}>سهروردی شمالی،خیابان امیری</div>
            </div>
            <div className={styles.card1}>
            <div>
                <img className={styles.img} src={image}/>
            </div>
            <div className={styles.card_text}>سهروردی شمالی،خیابان امیری</div>
            </div>
        
        </div>

      </div>
  );
}

export default Main;