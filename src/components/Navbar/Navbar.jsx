import { useState } from 'react';
import styles from './Navbar.module.css';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div className={styles.navbarContainer}>
            <nav className={styles.navbar}>
                <div className={styles.navbarBackgroundBlur}></div>

                <ul className={styles.navbarMenu}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#layanan">Layanan</a></li>
                    <li><a href="#testimonial">Testimonial</a></li>
                    <li><a href="#faq">FAQ</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                <div className={styles.navbarRight}>
                    <button className={styles.mobileToggle} onClick={toggleMenu}>
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {menuOpen && (
                    <div className={styles.mobileMenu}>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#layanan">Layanan</a></li>
                            <li><a href="#testimonial">Testimonial</a></li>
                            <li><a href="#faq">FAQ</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                )}
            </nav>
        </div>
    );
}
