import styles from "./Contact.module.css";
import { useTranslation } from "../../i18n/useTranslation";

export function Contact() {
  const { t } = useTranslation();

  return (
    <section
      className={styles.contactWrapper}
      aria-labelledby="contact-wrapper"
    >
      <header>
        <h2 id="contact-heading" className={styles.heading}>
          {t("contact.heading")}
        </h2>
      </header>
      <article className={styles.contactCard}>
        <header className={styles.headingWrapper}>
          <figure className={styles.profile}>
            <img
              src={new URL("../../assets/picture.jpg", import.meta.url).href}
              className={styles.avatar}
              alt="Benjamin Ziahi"
            />
            <figcaption>
              <h3 className={styles.name}>Benjamin Ziahi</h3>
              <p className={styles.role}>{t("contact.role")}</p>
            </figcaption>
          </figure>
        </header>
        <div className={styles.formWrapper}>
          <form
            action="https://formbold.com/s/3LnXQ"
            method="POST"
            encType="multipart/form-data"
            className={styles.form}
          >
            <div className={styles.formGrid}>
              <div className={styles.row}>
                <input
                  type="text"
                  name="name"
                  placeholder={t("contact.form.name")}
                  required
                  className={styles.input}
                  aria-label={t("contact.form.name")}
                />
                <input
                  type="text"
                  name="companyName"
                  placeholder={t("contact.form.company")}
                  required
                  className={styles.input}
                  aria-label={t("contact.form.company")}
                />
              </div>
              <div className={styles.row}>
                <input
                  type="email"
                  name="email"
                  placeholder={t("contact.form.email")}
                  required
                  className={styles.input}
                  aria-label={t("contact.form.email")}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder={t("contact.form.phone")}
                  className={styles.input}
                  aria-label={t("contact.form.phone")}
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder={t("contact.form.message")}
                  className={styles.textarea}
                  rows={4}
                  aria-label={t("contact.form.message")}
                />
              </div>
            </div>
            <div className={styles.submitRow}>
              <button type="submit" className={styles.submitBtn}>
                {t("contact.form.submit")}
              </button>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
}
