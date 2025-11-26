import { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styles from './Faqs.module.css';
import AnimationBg from '../../components/AnimationBg/AnimationBg';
import robotImage from "../../img/cruxieRobot.png"; 
import { useTranslation } from "react-i18next";

const Panel = ({ activeTab, index, activateTab }) => {
  const hasVisited = sessionStorage.getItem('visited');
  const [height, setHeight] = useState(0);
  const panelRef = useRef();
  const { t } = useTranslation();

  useEffect(() => {
    if (!hasVisited) {
      sessionStorage.setItem('visited', 'true');
    }

    setTimeout(() => {
      const el = ReactDOM.findDOMNode(panelRef.current);
      const height = el.querySelector('#panel_inner').scrollHeight;
      setHeight(height);
    }, 333);
  }, []);

  const isActive = activeTab === index;
  const innerStyle = { height: `${isActive ? height : 0}px` };

  return (
    <div className={styles.panel} role="tabpanel" ref={panelRef}>
      <button
        className={`${styles.panel_label} ${isActive ? styles.active : ''}`}
        role="tab"
        onClick={activateTab}
        aria-expanded={isActive}
      >
        {t(`faqs.${index}.question`)}
      </button>
      <div
        id="panel_inner"
        className={styles.panel_inner}
        style={innerStyle}
        aria-hidden={!isActive}
      >
        <p className={styles.panel_content}>{t(`faqs.${index}.answer`)}</p>
      </div>
    </div>
  );
};

const Faqs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { t } = useTranslation();

  const activateTab = (index) => {
    setActiveTab((prevActiveTab) => (prevActiveTab === index ? -1 : index));
  };

  return (
    <>
      <main className={styles.container}>
        <div className={styles.accordion} role="tablist">
          <div className={styles.hero}>
            <img
              src={robotImage}
              alt="robot Cruxie"
              className={styles.heroImg}
            />
            <h1>
              {t('common.faq_line1')}<br />
              {t('common.faq_line2')}
            </h1>
          </div>

          {Array.from({ length: 4 }).map((_, index) => (
            <Panel
              key={index}
              activeTab={activeTab}
              index={index}
              activateTab={() => activateTab(index)}
            />
          ))}
        </div>
      </main>
      <AnimationBg />
    </>
  );
};

export default Faqs;

