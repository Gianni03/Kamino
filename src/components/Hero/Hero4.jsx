import React from "react";
import styles from "./hero4.module.css";
import {useTranslation} from "react-i18next";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { validateFormFields } from "../../helpers/validateForm"; // ajustá la ruta según sea necesario

const MySwal = withReactContent(Swal);

const Hero4 = () => {
  const {t} = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    const errors = validateFormFields(data);

    if (errors.length > 0) {
      MySwal.fire({
        title: "❌ Formulario inválido",
        html: errors.map((e) => `<p>${e}</p>`).join(""),
        icon: "error",
        confirmButtonText: "Cerrar",
        customClass: {
          popup: "swal2-custom-popup",
          confirmButton: "swal2-confirm-button",
        },
      });
      return;
    }

    try {
      const response = await fetch("https://5a3n19yn44.execute-api.us-east-1.amazonaws.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        MySwal.fire({
          title: "✅ Enviado",
          text: "Tu mensaje ha sido enviado con éxito.",
          icon: "success",
          confirmButtonText: "Aceptar",
          customClass: {
            popup: 'swal2-custom-popup',
            confirmButton: 'swal2-confirm-button',
          },
        });
        e.target.reset();
      } else {
        MySwal.fire({
          title: "❌ Error",
          text: "Hubo un problema al enviar tu mensaje.",
          icon: "error",
          confirmButtonText: "Cerrar",
          customClass: {
            popup: 'swal2-custom-popup',
            confirmButton: 'swal2-confirm-button',
          },
        });
      }
    } catch (error) {
      console.error("Error:", error);
      MySwal.fire({
        title: "⚠️ Error inesperado",
        text: "No se pudo completar la acción.",
        icon: "warning",
        confirmButtonText: "Cerrar",
        customClass: {
          popup: 'swal2-custom-popup',
          confirmButton: 'swal2-confirm-button',
        },
      });
    }
  };

  const title = t("hero4.title")?.trim();
  const subtitle = t("hero4.subtitle")?.trim();

  return (
    <section className={styles.hero4Section}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.contentWrapper}>
        {/* Imagen hardcodeada + subtítulo */}
        <div className={styles.leftColumn}>
          <img
            src="/images/robotsForm.png"
            alt="Asistente virtual"
            className={styles.botImage}
          />
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        {/* Formulario traducido */}
        <div className={styles.rightColumn}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="name">{t("hero4.form.name")}</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">{t("hero4.form.email")}</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="phone">{t("hero4.form.phone")}</label>
            <input type="tel" id="phone" name="phone" required />

            <label htmlFor="message">{t("hero4.form.message")}</label>
            <textarea id="message" name="message" rows="4" required />

            <button type="submit" className={styles.ctaButton}>
              {t("hero4.form.submit")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero4;
