import '../css/aboutOurBeans.css';
import src from '../../../img/main-coffee.jpg';
import img from '../../../../coffee-house/svg/beans-logo-black.svg';

export default function AboutOurBeans() {
    return (
        <>
            <section className="about">
                <div className="about-img">
                    <img src={src} alt="picture" />
                </div>
                <div className="about-descr">
                    <h2 className="about-title">About our beans</h2>
                    <img src={img} alt="picture" />
                    <p className="about-text">
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        Afraid at highly months do things on at. <br /> Situation recommend objection do intention
                        so questions. As greatly removed calling pleased improve an. <br /> Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                    </p>
                </div>
            </section>
            <div className="line"></div>
        </>
    )
}