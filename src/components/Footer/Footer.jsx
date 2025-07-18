import styles from './Footer.module.css';
import { Mail, Instagram, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerBackgroundWrapper}>
                <div className={styles.footerContent}>
                    <div className={styles.section}>
                        <h4 className={styles.sectionTitle}>Connect With Us</h4>
                        <div className={styles.iconRow}>
                            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                                <Instagram size={20} />
                                <span>@yourusername</span>
                            </a>
                            <a href="mailto:youremail@example.com" className={styles.iconLink}>
                                <Mail size={20} />
                                <span>youremail@example.com</span>
                            </a>
                            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                                <Phone size={20} />
                                <span>+62 812-3456-7890</span>
                            </a>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h4 className={styles.sectionTitle}>Quick Links</h4>
                        <ul className={styles.linksList}>
                            <li><a href="#layanan">Layanan</a></li>
                            <li><a href="#testimonial">Testimonial</a></li>
                            <li><a href="#faq">FAQ</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p className={styles.footerText}>© 2025. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
