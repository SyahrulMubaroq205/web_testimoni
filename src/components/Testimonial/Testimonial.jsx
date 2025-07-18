import styles from './Testimonial.module.css';

const testimonials = [
    {
        name: "Dina Rahma",
        title: "Mahasiswa UI",
        quote: "Pelayanannya cepat dan hasilnya memuaskan banget. Aku revisi cuma sekali langsung oke!",
        image: "https://picsum.photos/200/300",
    },
    {
        name: "Raka Dwi",
        title: "Mahasiswa PNJ",
        quote: "Sangat membantu saat butuh script automation Python mepet deadline. Profesional banget.",
        image: "https://picsum.photos/200/300",
    },
    {
        name: "Sarah Ayu",
        title: "Mahasiswa UNJ",
        quote: "Friendly dan sabar bantuin aku yang awam soal HTML. Terima kasih banyak!",
        image: "https://picsum.photos/200/300",
    },
];

export default function Testimonial() {
    return (
        <section className={styles.testimonialSection}>
            <h2 className={styles.sectionTitle}>Testimonial</h2>
            <div className={styles.cardContainer}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className={styles.testimonialCard}>
                        <img src={testimonial.image} alt={testimonial.name} className={styles.userImage} />
                        <p className={styles.quote}>“{testimonial.quote}”</p>
                        <div className={styles.userInfo}>
                            <strong className={styles.name}>{testimonial.name}</strong>
                            <span className={styles.title}>{testimonial.title}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
