import '../css/headerCoffeeHouse.css';
import Navigation from "../../../../navigation/js/navigation";
import img from '../../../svg/beans-logo-white.svg';

export default function HeaderCoffeeHouse() {
    return (
        <section className="header">
            <Navigation className="header-nav nav" />
            <div className="about">
                <h1 className="about-title">
                    Everything You Love About Coffee
                </h1>
                <img src={img} alt="pictures" className="about-img" />
                <p className="about-text">
                     We makes every day full of energy and taste
                </p>
                <p className="about-text">
                     Want to try our beans?
                </p>
                <button className="about-btn">
                     More
                </button>
            </div>
        </section>
    )
}