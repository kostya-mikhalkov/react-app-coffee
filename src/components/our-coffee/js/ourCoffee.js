import HeaderOurCoffee from "../blocks/header/js/headerOurCoffee";
import AboutOurBeans from "../blocks/about-our-beans/js/aboutOurBeans";
import OurCoffeeFilter from "../blocks/our-cofee-filter/js/ourCoffeeFilter";
import Footer from "../../coffee-house/blocks/footer/js/footer";

import '../css/ourCoffee.css';

export default function OurCoffee () {
    return (
        <div className="our-coffee">
        <HeaderOurCoffee />
        <AboutOurBeans />
        <OurCoffeeFilter />
        <Footer />
        </div>
    )
}