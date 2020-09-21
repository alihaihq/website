import Link from 'next/link';
import { Icon } from 'antd';
import styles from './HeaderBanner.module.css';
import logoImg from '../../assets/images/logo.png';

const HeaderBanner = ({ buttonText, buttonURL }) => (
  <div className={styles.headerBanner}>
    <div className={styles.curveContainer}>
      <div className={styles.curve} />
    </div>
    <div className={styles.content}>
      <div className={styles.headerBar}>
        <div className={styles.contactItem}>
          <Icon type="phone" style={{ marginRight: 5 }} />
          <div className={styles.contactList}>
            <span>+91 7001871118</span>
            <span>,&nbsp;</span>
            <span>+91 9123796456</span>
          </div>
        </div>
        <div className={styles.contactItem}>
          <Icon type="mail" style={{ marginRight: 5 }} />
          <div className={styles.contactList}>
            <span>alihaistore@gmail.com</span>
            <span>,&nbsp;</span>
            <span>hello@rousan.io</span>
          </div>
        </div>
      </div>
      <header className={styles.header}>
        <Link href="/">
          <a>
            <img src={logoImg} alt="Alihai Logo" />
          </a>
        </Link>
      </header>
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>Alihai Store</h3>
        <h4 className={styles.subtitle}>
          Fashion is in your hand, we just help you to make it.
        </h4>
      </div>
      {buttonText && buttonURL ? (
        <div className={styles.mainButtonContainer}>
          <Link href={buttonURL}>
            <a rel="noopener noreferrer">
              <span>{buttonText}</span>
              <Icon type="right" style={{ marginLeft: 10 }} />
            </a>
          </Link>
        </div>
      ) : null}
    </div>
  </div>
);

export default HeaderBanner;
