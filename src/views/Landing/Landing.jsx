import React, { useEffect } from 'react';
import styles from './Landing.module.css';
import Hero from '../../components/Hero/Hero';
import Hero2 from '../../components/Hero/Hero2';
import Hero3 from "../../components/Hero/Hero3"
import Hero4 from "../../components/Hero/Hero4"
import Hero5 from "../../components/Hero/hero5"
const Landing = () => {
  const hasVisited = sessionStorage.getItem('visited');

  useEffect(() => {
    if (!hasVisited) {
      sessionStorage.setItem('visited', 'true');
    }
  }, []);

  return (
    <main className={`${styles.container} ${!hasVisited ? styles.containerAnim : ''}`}>
      {/* Luz redonda centrada */}
      <img
        src="/images/luz.webp"
        alt="Luz decorativa"
        className={styles.bgGlow}
      />


      {/* Hero */}
      <Hero />
      <Hero2 />
      <Hero3/>
      <Hero5/>
      <Hero4/>

    </main>
  );
};

export default Landing;
