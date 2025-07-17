import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section className={styles.contactContainer}>
      <h2 className={styles.title}>Any Question?</h2>
      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappButton}
      >
        Contact Me
      </a>
    </section>
  );
}
