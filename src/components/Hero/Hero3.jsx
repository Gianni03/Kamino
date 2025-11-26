import styles from "./hero3.module.css";
import {useTranslation} from "react-i18next";

const Hero3 = () => {
  const {t} = useTranslation();

  const bottomTitleWords = t("hero3.bottomTitle")?.trim().split("\n") || [];

  return (
    <section className={`${styles.heroSection} ${styles.hero3Section}`}>
      <div className={styles.textContent}>
        {/* Título superior completo sin spans */}
        <h2 className={styles.topTitle}>{t("hero3.title")}</h2>

        {/* Título intermedio */}
        {/* <h3 className={styles.mainTitle2}>{t("hero3.title")}</h3> */}

        {/* Caja de descripción */}
        <p className={styles.descriptionBox}>{t("hero3.box")}</p>

        {/* Título principal inferior dividido */}
        <h1 className={styles.mainTitle}>
          <span className={styles.white}>
            {bottomTitleWords.slice(0, -1).join(" ")}
          </span>
          <br />
          <span className={styles.gradientWord}>
            {bottomTitleWords.slice(-1)}
          </span>
        </h1>

        {/* Botón CTA */}
        <button
          className={styles.ctaButton}
          onClick={() =>
            window.open(
              "https://cruxie.holocruxe.com/",
              "_blank",
              "noopener,noreferrer"
            )
          }
        >
          {t("hero3.cta")}
        </button>
      </div>
    </section>
  );
};

export default Hero3;
