import Navigation from "../../../../navigation/js/navigation";
import img from '../../../svg/beans-logo-black.svg';
import '../css/footer.css';

export default function Footer() {
    return (
        <section className="footer">
            <Navigation className='footer-nav' classes='footer-elem'/>
            <img src={img} alt="picture" />
        </section>
    )
}