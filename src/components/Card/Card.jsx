import styles from './Card.module.css';
import { FaPython, FaHtml5, FaCss3Alt } from 'react-icons/fa'; // pakai react-icons

export default function Card() {
    const services = [
        {
            name: 'Python Automation',
            icon: <FaPython size={40} color="#3776AB" />,
        },
        {
            name: 'HTML Page Design',
            icon: <FaHtml5 size={40} color="#e34c26" />,
        },
        {
            name: 'CSS Styling',
            icon: <FaCss3Alt size={40} color="#264de4" />,
        },
    ];

    return (
        <div className={styles.cardGrid}>
            {services.map((service, index) => (
                <div className={styles.cardContainer} key={index}>
                    <div className={styles.cardIcon}>{service.icon}</div>
                    <h3 className={styles.cardTitle}>{service.name}</h3>
                    <button className={styles.cardButton}>Harga berdasarkan deadline</button>
                </div>
            ))}
        </div>
    );
}
