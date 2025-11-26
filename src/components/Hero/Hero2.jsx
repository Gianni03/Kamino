import styles from "./hero2.module.css";
import {useTranslation} from "react-i18next";

const Hero2 = () => {
  const {t} = useTranslation();

  const assistantItems = [
    t("hero2.assistantItem1"),
    t("hero2.assistantItem2"),
    t("hero2.assistantItem3"),
  ];

  return (
    <>
      {/* Sección informativa */}
      <section className={styles.infoSection}>
        {/* <h2 className={styles.sectionTitle}>{t("hero2.h2")}</h2> */}

        <div className={styles.containerHero2}>
          <div className={styles.containerHero2}>
            <p>{t("hero2.p")}</p>
          </div>
        </div>
      </section>

      {/* Sección asistente virtual */}
      <section className={styles.assistantSection}>
        <div className={styles.botBackground}></div>

        <div className={styles.botImageWrapper}>
          <img
            src='/images/STICKER-INDIVIDUAL.png'
            alt={t("hero2.assistantTitle")}
            className={styles.botImage}
          />
        </div>

        <div className={styles.botContent}>
          <h2 className={styles.botTitle}>{t("hero2.assistantTitle")}</h2>

          <div className={styles.botDescriptionBox}>
            <div className={styles.botListBox}>
              {assistantItems.map((item, index) => (
                <span key={index}>
                  <strong>{item}</strong>
                </span>
              ))}
            </div>

            <div className={styles.additionalDescription}>
              <p>{t("hero2.p2")}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero2;
