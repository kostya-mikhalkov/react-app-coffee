import { Component } from "react";

import HeaderCoffeeHouse from "../blocks/header/js/headerCoffeeHouse";
import AboutUs from "../blocks/about-us/js/aboutUs";
import OurBest from "../blocks/best/js/ourBest";
import Footer from "../blocks/footer/js/footer";

import '../css/coffeeHouse.css';

class CoffeeHouse extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="coffee-house">
                <HeaderCoffeeHouse onClicked={this.props.onClicked} />
                <AboutUs />
                <OurBest />
                <Footer />
            </div>
        )
    }
}
export default CoffeeHouse;