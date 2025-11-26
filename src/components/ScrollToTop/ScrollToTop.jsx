import { useEffect, useState } from 'react';
import styles from './scrollToTop.module.css';

import ArrowCircle from '../../icons/arrow-circle.svg'

const ScrollToTop = () => {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setDisplay(window.scrollY > 400);
    });
  }, []);

  return (
    <>
      {display && (
        <div className={styles.container}>
          <a href="#logo" className={styles.top}>
          <img src={ArrowCircle} alt="arrow circle" className={styles.arrowcircle} />
          </a>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
