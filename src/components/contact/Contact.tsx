import styles from "./Contact.module.css";

export function Contact() {
  return (
    <div className={styles.contactWrapper}>
      <div className={styles.heading}>Want to know more about this case?</div>
      <div className={styles.contactCard}>
        <div className={styles.profile}>
          <img
            src={
              new URL("../../assets/portfolio-logo-light.png", import.meta.url)
                .href
            }
            className={styles.avatar}
          />
          <div>
            <h4 className={styles.name}>Benjamin Ziahi</h4>
            <p className={styles.role}>Product Engineer</p>
          </div>
        </div>
        <div className={styles.actions}>
          <a href="tel:0612345678" className={styles.actionBtn}>
            0612345678
          </a>
          <a
            href="mailto:first.lastname@outlook.com"
            className={styles.actionBtn}
          >
            first.lastname@outlook.com
          </a>
        </div>
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
                  placeholder="Naam"
                  required
                  className={styles.input}
                />
                <input
                  type="text"
                  name="companyName"
                  placeholder="Bedrijfsnaam"
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.row}>
                <input
                  type="email"
                  name="email"
                  placeholder="E-mailadres"
                  required
                  className={styles.input}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Telefoonnummer"
                  className={styles.input}
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Bericht"
                  className={styles.textarea}
                  rows={4}
                />
                <input type="hidden" name="tags" />
              </div>
            </div>
            <div className={styles.submitRow}>
              <button type="submit" className={styles.submitBtn}>
                Verzenden
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
