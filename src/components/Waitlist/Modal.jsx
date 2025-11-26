import Modal from 'react-modal';
import robot from '../../img/robot';
import styles from './modal.module.css';
import { useTranslation } from 'react-i18next';

const WaitlistModal = ({ isOpen, onClose }) => {
  const {t, i18n } = useTranslation();

  return (
    <Modal
      isOpen={isOpen} //Muestra contenido con un booleano
      onRequestClose={onClose} //evento para cerrar en este caso el modal, deja de mostrarlo
      contentLabel="Congratulations Modal"
      className={styles.container}
    >
      <div className={styles.modal}>
        <img className={styles.img} src={robot.cohete} alt="cohete" />
        <p className={styles.bold}>{t("waitlist.register")}</p>
        <p className={styles.small}>{t("waitlist.register2")}</p>
        <div className={styles.btn}>
          <button onClick={onClose}>
            {t("waitlist.closeButton")}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default WaitlistModal;
