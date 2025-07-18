import Card from "../components/Card/Card";
import Contact from "../components/Contact/Contact";
import Faq from "../components/Faq/Faq";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Testimonial from "../components/Testimonial/Testimonial";

export default function Home() {
    return (
        <div>
            <Navbar />

            <section id="layanan">
                <Card />
            </section>

            <section id="testimonial">
                <Testimonial />
            </section>


            <section id="faq">
                <Faq />
            </section>

            <section id="contact">
                <Contact />
            </section>

            <Footer />
        </div>
    )
}
