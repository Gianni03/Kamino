import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import styles from "./waitlist.module.css";
import vector from "../../img/vector";
import WaitlistModal from "./Modal";

import { useTranslation } from "react-i18next";

const Waitlist = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isRegistered, setIsRegistered] = useState(false); //poner en true para probar
  const [captchaValue, setCaptchaValue] = useState("");
  const [showCaptcha, setShowCaptcha] = useState(false);
  const { t, i18n } = useTranslation();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!showCaptcha) {
      setShowCaptcha(true);
      return;
    }

    if (captchaValue === "") {
      console.error("Please verify the captcha");
      return;
    }

    const response = await fetch(
      `${import.meta.env.VITE_BACK_CONECTION}/users`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, captchaValue }),
      }
    );
    if (response.ok) {
      setIsRegistered(true);
      openModal(); //Agregamos funcion de openModal para que al registrarse, abra el modal
    } else {
      console.error("Registration failed"); //Hay que hacer pagina de error 404
    }

    const data = await response.jsvalueon();

    setName("");
    setEmail("");
    setCaptchaValue("");
  };

  const onChange = (value) => {
    setCaptchaValue(value);
  };

  const [modalIsOpen, setModalIsOpen] = useState(true);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <section id="waitlist" className={styles.waitlist}>
      <div className={styles.ligths}>
        <img className={styles.image} src={vector.vector09} alt="bg" />
        <img className={styles.image} src={vector.vector18} alt="bg" />
        <img className={styles.image} src={vector.vector12} alt="bg" />
        <img className={styles.image} src={vector.vector16} alt="bg" />
        <img className={styles.image} src={vector.vector19} alt="bg" />
        <img className={styles.image} src={vector.vector20} alt="bg" />
        <img className={styles.image} src={vector.vector14} alt="bg" />
      </div>
      <div className={styles.text_section}>
        <div className={styles.title}>
          <h2>{t("waitlist.h2")}</h2>
        </div>
      </div>
      <div className={styles.form_and_model}>
        <form className={styles.join_waitlist} onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
            autoComplete="off"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            autoComplete="off"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {showCaptcha && (
            <ReCAPTCHA
              sitekey={`${import.meta.env.VITE_CAPTCHA_KEY}`}
              onChange={onChange} className={styles.captcha}
            />
          )}
          <button type="submit">{t("waitlist.btn")}</button>
        </form>
      </div>
      {isRegistered &&
        modalIsOpen && ( //El modal se muestra bajo dos condiciones: una cuando el usuario esta registrado y la otra le manda al modal abrirse o cerrarse
          <WaitlistModal isOpen={openModal} onClose={closeModal} />
        )}
    </section>
  );
};

export default Waitlist;
