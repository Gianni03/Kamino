import { useEffect } from "react"
import styles from "./Blog.module.css"
import robot from "../../img/cruxieRobot.png"

import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"

const Blog = () => {
  const hasVisited = sessionStorage.getItem("visited")
  const { t } = useTranslation()
  const navigate = useNavigate()

  useEffect(() => {
    if (!hasVisited) {
      sessionStorage.setItem("visited", "true")
    }
  }, [hasVisited])

  return (
    <div className={styles.container}>
      <div className={styles.semicircle}></div>

      <div className={styles.valuesHeader}>
        <img src={robot} alt="Robot" className={styles.robot} />
        <div className={styles.text_title2}>
          <h2>
            {t("blog.title-line1")}<br />
            {t("blog.title-line2")}
          </h2>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
        <button className={styles.btnCeleste} onClick={() => navigate("/")}>
          {t("blog.btn-back-home")}
        </button>
      </div>
    </div>
  )
}

export default Blog
