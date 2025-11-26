import styles from "./hero.module.css";
import EarthCanvas from "../../components/models/Earth";
import mouseIcon from "../../icons/mouse.svg";
import { useTranslation } from "react-i18next";
import { HiArrowNarrowRight } from "react-icons/hi"; // o el que uses

const Hero = () => {
  const { t } = useTranslation();
  const heroWords = t("landing.hero").trim().split(" ");

  return (
    <section className={styles.heroSection}>
      <div className={styles.textContent}>
        <h1 className={styles.mainTitle}>
          <span className={styles.white}>
            {heroWords.slice(0, 2).join(" ")} {/* WE ARE */}
          </span>
          <br />
          <span className={styles.white}>
            {heroWords.slice(2, heroWords.length - 1).join(" ")}{" "}
            {/* GOOD AT CREATING */}
          </span>
          <span className={styles.gradientWord}>
            {heroWords[heroWords.length - 1]} {/* LEGACY */}
          </span>
        </h1>

        {(() => {
          const fullText = t("landing.hero-a").trim();
          const middle = Math.floor(fullText.length / 1);
          const firstHalf = fullText.slice(0, middle).trim();
          const secondHalf = fullText.slice(middle).trim();
          return [firstHalf, secondHalf].map((line, index) => (
            <p key={index} className={styles.subtitle}>
              {line}
            </p>
          ));
        })()}

        <button
          className={styles.ctaButton}
          onClick={() => window.open("https://cruxie.holocruxe.com/", "_blank")}
        >
          {t("landing.hero-b")}
        </button>
      </div>

      <div className={styles.earthWrapper}>
        <div className={styles.earthCanvasWrapper}>
          <EarthCanvas />
        </div>

      </div>
      <div className={styles.scrollIcon}>
        <img src={mouseIcon} alt={t("landing.hero-scroll-alt")} />
        <p>{t("landing.hero-scroll-text")}</p>
      </div>

    </section>
  );
};

export default Hero;
