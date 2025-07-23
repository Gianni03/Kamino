import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import menu from "../../img/menu";
import styles from "./Navbar.module.css";
import Mobile from "./Mobile";
import { useTranslation } from "react-i18next";
import LanguageMenu from "./LanguageMenu/LanguageMenu";

const Navbar = () => {
  const location = useLocation();
  const hasVisited = sessionStorage.getItem("visited");

  const svgVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 3,
        ease: "easeInOut",
      },
    },
  };
  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        duration: 3,
        ease: "easeInOut",
      },
    },
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <header className={styles.container}>
      <div
        id="logo"
        className={`${styles.logoContainer} ${
          !hasVisited && location.pathname === "/" && styles.logoContainerAnim
        }`}
      >
        <NavLink to="/">
          <motion.svg
            viewBox="0 0 695 117"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            variants={svgVariants}
            initial="hidden"
            animate="visible"
            className={`${styles.svgLogo} ${
              !hasVisited && location.pathname === "/" && styles.svgLogoAnim
            }`}
          >
            <motion.path
              d="M685.157 32.565C683.69 30.77 683.955 28.125 685.75 26.6574C687.545 25.1897 690.19 25.4551 691.658 27.2502C693.126 29.0453 692.86 31.6902 691.065 33.1578C689.27 34.6255 686.625 34.3601 685.157 32.565Z"
              fill="#349aef"
              variants={pathVariants}
            />
            <motion.path
              d="M673 31H653V58.5M653 58.5H689M653 58.5V89H689"
              stroke="#F7F9F9"
              strokeWidth="10"
              strokeLinecap="round"
              variants={pathVariants}
            />
            <motion.path
              d="M621.657 29.565C620.19 27.77 620.455 25.125 622.25 23.6574C624.045 22.1897 626.69 22.4552 628.158 24.2502C629.626 26.0453 629.36 28.6902 627.565 30.1579C625.77 31.6255 623.125 31.3601 621.657 29.565Z"
              fill="#349aef"
              variants={pathVariants}
            />
            <motion.path
              d="M585 29L605 59M625 89L605 59M605 59L585 89M605 59L615.638 44.3191"
              stroke="#F7F9F9"
              strokeWidth="10"
              strokeLinecap="round"
              variants={pathVariants}
            />
            <motion.path
              d="M478.157 86.065C476.69 84.27 476.955 81.625 478.75 80.1574C480.545 78.6897 483.190 78.9552 484.658 80.7502C486.126 82.5453 485.860 85.1902 484.065 86.6579C482.270 88.1255 479.625 87.8601 478.157 86.065Z"
              fill="#349aef"
              variants={pathVariants}
            />
            <motion.path
              d="M441 92V59M469.5 59C473.167 57 480.5 50.5 480.5 40.5C480.5 30.5 473.167 26.6666 469.5 26H441V59M469.5 59H441M469.5 59L474.5 71.5"
              stroke="#F7F9F9"
              strokeWidth="10"
              strokeLinecap="round"
              variants={pathVariants}
            />
            <motion.path
              d="M290.002 26.5331C296.723 30.4426 301.967 36.4616 304.918 43.6559C307.869 50.8501 308.363 58.8173 306.323 66.321C304.283 73.8246 299.823 80.4451 293.636 85.1549C287.448 89.8647 279.879 92.4004 272.103 92.3685C264.327 92.3367 256.779 89.739 250.631 84.9786C244.482 80.2183 240.077 73.5615 238.098 66.0413C236.120 58.5212 236.679 50.5583 239.689 43.3885C242.699 36.2187 247.991 30.2429 254.745 26.3885"
              stroke="#F7F9F9"
              strokeWidth="10"
              strokeLinecap="round"
              variants={pathVariants}
            />
            <motion.circle
              cx="272.12"
              cy="24.5336"
              r="4.19832"
              fill="#349aef"
            />
            <motion.path
              d="M138.002 26.5331C144.723 30.4426 149.967 36.4616 152.918 43.6559C155.869 50.8501 156.363 58.8173 154.323 66.321C152.283 73.8246 147.823 80.4451 141.636 85.1549C135.448 89.8647 127.879 92.4004 120.103 92.3685C112.327 92.3367 104.779 89.739 98.6306 84.9786C92.482 80.2183 88.0766 73.5615 86.0982 66.0413C84.1198 58.5212 84.679 50.5583 87.6889 43.3885C90.6989 36.2187 95.9914 30.2429 102.745 26.3885"
              stroke="#F7F9F9"
              strokeWidth="10"
              strokeLinecap="round"
              variants={pathVariants}
            />
            <motion.circle
              cx="120.12"
              cy="24.5336"
              r="4.19832"
              fill="#349aef"
            />
            <motion.path
              d="M402.657 88.565C401.19 86.77 401.455 84.125 403.25 82.6574C405.045 81.1898 407.69 81.4552 409.158 83.2502C410.626 85.0453 410.36 87.6902 408.565 89.1579C406.77 90.6255 404.125 90.3601 402.657 88.565Z"
              fill="#349aef"
              variants={pathVariants}
            />
            <motion.path
              d="M386.185 92.8811C378.507 94.109 370.638 92.7681 363.799 89.0664C356.961 85.3648 351.536 79.5094 348.365 72.409C345.195 65.3085 344.457 57.3602 346.266 49.7976C348.075 42.2349 352.330 35.4808 358.370 30.5836C364.410 25.6863 371.898 22.9197 379.671 22.7132C387.444 22.5067 395.069 24.8717 401.360 29.4414"
              stroke="#F7F9F9"
              strokeWidth="10"
              strokeLinecap="round"
              variants={pathVariants}
            />
            <motion.path
              d="M214.657 94.565C213.19 92.77 213.455 90.125 215.25 88.6574C217.045 87.1897 219.690 87.4552 221.158 89.2502C222.626 91.0453 222.360 93.6902 220.565 95.1579C218.770 96.6255 216.125 96.3601 214.657 94.565Z"
              fill="#349aef"
              variants={pathVariants}
            />
            <motion.path
              d="M185 25V58.5V92H206"
              stroke="#F7F9F9"
              strokeWidth="10"
              strokeLinecap="round"
              variants={pathVariants}
            />
            <motion.path
              d="M45.6574 26.565C44.1898 24.77 44.4552 22.125 46.2503 20.6574C48.0453 19.1897 50.6903 19.4552 52.1579 21.2502C53.6255 23.0453 53.3601 25.6902 51.5651 27.1579C49.770 28.6255 47.1251 28.3601 45.6574 26.565Z"
              fill="#349aef"
              variants={pathVariants}
            />
            <motion.path
              d="M5 24.9999V58.4999M5 91.9999V58.4999M5 58.4999H49M49 58.4999V44.9574M49 58.4999V91.9999"
              stroke="#F7F9F9"
              strokeWidth="10"
              strokeLinecap="round"
              variants={pathVariants}
            />
            <motion.path
              d="M553.657 29.5651C552.19 27.77 552.455 25.1251 554.25 23.6574C556.045 22.1898 558.690 22.4552 560.158 24.2502C561.626 26.0453 561.360 28.6903 559.565 30.1579C557.770 31.6255 555.125 31.3601 553.657 29.5651Z"
              fill="#349aef"
              variants={pathVariants}
            />
            <motion.path
              d="M509 25V73.5C509 77.5 509 91.5 533 91.5C556.5 91.5 556.5 78.5 556.5 73.5V48"
              stroke="#F7F9F9"
              strokeWidth="10"
              strokeLinecap="round"
              variants={pathVariants}
            />
          </motion.svg>
        </NavLink>
      </div>
      <nav
        className={`${styles.navbar} ${
          !hasVisited && location.pathname === "/" && styles.navbarAnim
        }`}
      >
        <NavLink
          to="/"
          className={`${styles.link} ${
            location.pathname === "/" && styles.activeLink
          }`}
        >
          {t("navbar.home")}
        </NavLink>
        <NavLink
          to="/about"
          className={`${styles.link} ${
            location.pathname === "/about" ? styles.activeLink : null
          }`}
        >
          {t("navbar.about")}
        </NavLink>
        <NavLink
          to="/faqs" 
          className={`${styles.link} ${
            location.pathname === "/faqs" ? styles.activeLink : null
          }`}
        >
          {t("navbar.faq")} 
        </NavLink>
        <a
          href="https://blog.holocruxe.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          {t("navbar.blog")}
        </a>
        <div className={styles.indicator}></div>
      </nav>
      <div className={styles.navBarContainer}>
        <nav className={styles.mobile} onClick={toggleMenu}>
          <img
            className={styles.hamburger}
            src={menuOpen ? menu.x : menu.hamb}
            alt={menuOpen ? "Close menu" : "Open menu"}
          />
        </nav>
        <LanguageMenu />
        <Mobile menuOpen={menuOpen} toggleMenu={toggleMenu} />
      </div>
    </header>
  );
};
export default Navbar;
