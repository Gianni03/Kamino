import styles from "./Footer.module.css";
import {IoMailOutline} from "react-icons/io5";
import {FaInstagram} from "react-icons/fa";
import {TbBrandLinkedin} from "react-icons/tb";

const Footer = () => {
  return (
    <>
      <footer className={styles.footerDistributed}>
        <div className={styles.footerLeft}>
          <img src='./footer.png' alt='logo' />
        </div>

        <div className={styles.footerCenter}>
          <p>Holocruxe &copy; 2025</p>
        </div>

        <div className={styles.footerRight}>
          {/* <a
            href="mailto:contacto@holocruxe.com" 
            className={styles.navlink}
          >
            <IoMailOutline className={styles.socialIcon} />
          </a> */}
          <a
            href='https://www.instagram.com/holocruxe/'
            className={styles.navlink}
            target='_blank'
            rel='noreferrer'
          >
            <FaInstagram className={styles.socialIcon} />
          </a>
          <a
            href='https://www.linkedin.com/company/holocruxe/'
            className={styles.navlink}
            target='_blank'
            rel='noreferrer'
          >
            <TbBrandLinkedin className={styles.socialIcon} />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
