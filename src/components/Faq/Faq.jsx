import { useState } from 'react';
import styles from './Faq.module.css';
import { ChevronDown, ChevronRight } from 'lucide-react';

const faqData = [
    {
        question: 'Apakah ini aman?',
        answer: 'Sangat aman. Kami menjaga privasi dan kerahasiaan data kamu sepenuhnya.'
    },
    {
        question: 'Berapa lama pengerjaan?',
        answer: 'Tergantung kompleksitas. Biasanya antara 3 sampai 7 hari kerja.'
    },
    {
        question: 'Apakah bisa revisi?',
        answer: 'Bisa. Kami menyediakan maksimal 2 kali revisi ringan secara gratis.'
    },
    {
        question: 'Apakah bisa mepet deadline?',
        answer: 'Bisa banget! Tapi ada tambahan biaya sesuai tingkat urgensi.'
    },
    {
        question: 'Apakah bakal ketahuan dosen?',
        answer: 'Tidak. Kami buat dengan gaya penulisan dan struktur sesuai mahasiswa.'
    },
    {
        question: 'Apakah bakal pakai AI?',
        answer: 'AI hanya sebagai referensi awal, hasil akhir 100% manual dan sesuai permintaan.'
    }
];

export default function Faq() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className={styles.faqContainer}>
            <h2 className={styles.faqTitle}>FAQ</h2>
            <div className={styles.timeline}>
                {faqData.map((item, index) => (
                    <div key={index} className={styles.timelineItem}>
                        <div className={styles.timelineDot} />
                        <div className={styles.timelineLine} />
                        <div className={styles.faqBox} onClick={() => toggleFAQ(index)}>
                            <div className={styles.questionRow}>
                                <h3 className={styles.faqQuestion}>{item.question}</h3>
                                {activeIndex === index ? (
                                    <ChevronDown className={styles.icon} />
                                ) : (
                                    <ChevronRight className={styles.icon} />
                                )}
                            </div>
                            {activeIndex === index && (
                                <p className={styles.faqAnswer}>{item.answer}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
