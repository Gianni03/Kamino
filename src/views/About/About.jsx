import { useEffect } from "react"
import styles from "./About.module.css"
import robot from "../../img/cruxieRobot.png"

import { useTranslation } from "react-i18next"

const About = () => {
  const hasVisited = sessionStorage.getItem("visited")
  const { t } = useTranslation()

  useEffect(() => {
    if (!hasVisited) {
      sessionStorage.setItem("visited", "true")
    }
  }, [hasVisited])

  return (
    <div className={styles.container}>
      <div className={styles.semicircle}></div>
      <div className={styles.wavesBackground}></div>

      <div className={styles.text_section}>
        <div className={styles.text_title}>
          <h2>{t("about.title-1")}</h2>
        </div>
      </div>

      <article className={styles.text}>
        <div className={styles.sizeMobil}>
          <span className={styles.titleSmall}>{t("about.holocruxe")}</span>
          <div className={styles.textBox}>
            {t("about.holocruxeP-1-line1")}<br />
            {t("about.holocruxeP-1-line2")}
          </div>
        </div>
      </article>

      <div className={styles.valuesHeader}>
        <img src={robot} alt="Robot" className={styles.robot} />
        <div className={styles.text_title2}>
          <h2>
            {t("about.title-2-line1")}<br />
            {t("about.title-2-line2")}
          </h2>
        </div>
      </div>

      <div className={styles.values}>
        <div className={styles.value}>
          <h3 className={styles.title}>{t("about.authenticity")}</h3>
          <p>{t("about.authenticityP")}</p>
        </div>
        <div className={styles.value}>
          <h3 className={styles.title}>{t("about.connection")}</h3>
          <p>{t("about.connectionP")}</p>
        </div>
        <div className={styles.value}>
          <h3 className={styles.title}>{t("about.privacy")}</h3>
          <p>{t("about.privacyP")}</p>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
  <button
    className={styles.btnCeleste}
    onClick={() => window.open("https://cruxie.holocruxe.com/" , "_blank")}
  >
    {t("about.button-legacy")}
  </button>
</div>

    </div>
  )
}

export default About