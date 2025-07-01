import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section
      className={styles.contactWrapper}
      aria-labelledby="contact-wrapper"
    >
      <header>
        <h2 id="contact-heading" className={styles.heading}>
          Want to know more about this case?
        </h2>
      </header>
      <article className={styles.contactCard}>
        <header className={styles.headingWrapper}>
          <figure className={styles.profile}>
            <img
              src={
                new URL(
                  "../../assets/portfolio-logo-light.png",
                  import.meta.url
                ).href
              }
              className={styles.avatar}
              alt="Benjamin Ziahi"
            />
            <figcaption>
              <h3 className={styles.name}>Benjamin Ziahi</h3>
              <p className={styles.role}>Product Engineer</p>
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
                  placeholder="Naam"
                  required
                  className={styles.input}
                  aria-label="Naam"
                />
                <input
                  type="text"
                  name="companyName"
                  placeholder="Bedrijfsnaam"
                  required
                  className={styles.input}
                  aria-label="Bedrijfsnaam"
                />
              </div>
              <div className={styles.row}>
                <input
                  type="email"
                  name="email"
                  placeholder="E-mailadres"
                  required
                  className={styles.input}
                  aria-label="E-mailadres"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Telefoonnummer"
                  className={styles.input}
                  aria-label="Telefoonnummer"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Bericht"
                  className={styles.textarea}
                  rows={4}
                  aria-label="Bericht"
                />
              </div>
            </div>
            <div className={styles.submitRow}>
              <button type="submit" className={styles.submitBtn}>
                Verzenden
              </button>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
}
