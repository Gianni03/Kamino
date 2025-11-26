
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import menu from "../../img/menu";
import styles from "./navBarMobile.module.css";
import { Trans } from "react-i18next";


export default function Mobile({ menuOpen, toggleMenu }) {
  const containerClass = menuOpen
    ? `${styles.mobilContainer} ${styles.navMobileVisible}`
    : styles.mobilContainer;
  const handleLinkClick = () => {
    toggleMenu(false);
  };

  return (
    <div className={containerClass}>
      <div className={styles.mobileHeader}>
        <nav className={styles.mobile} onClick={toggleMenu}>

        </nav>
      </div>
      <nav
        className={`${styles.navMobile} ${
          menuOpen ? styles.navMobileVisible : ""
        }`}
      >
        <NavLink to="/" className={styles.linkM} onClick={handleLinkClick}>
          <Trans i18nKey={"navbar.home"}>Home </Trans>
        </NavLink>
        <NavLink to="/about" className={styles.linkM} onClick={handleLinkClick}>
          <Trans i18nKey={"navbar.about"}></Trans>
        </NavLink>
        <NavLink to="/faqs" className={styles.linkM} onClick={handleLinkClick}>
          <Trans i18nKey={"navbar.faq"}></Trans>
        </NavLink>
        <a
          href="https://blog.holocruxe.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkM}
          onClick={handleLinkClick}
        >
          <Trans i18nKey={"navbar.blog"}></Trans>
        </a>
        <a
          href="https://cruxie.holocruxe.com/" 
          target="_blank"
          rel="noopener noreferrer"
          className={styles.probaCruxieMobileButton} 
          onClick={handleLinkClick} 
        >
          <Trans i18nKey={"navbar.cruxieButton"}></Trans>
          <span className={styles.plusSignMobile}>+</span> 
        </a>
      </nav>
    </div>
  );
}