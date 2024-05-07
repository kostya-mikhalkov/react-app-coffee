import { Component } from "react";
import HeaderOurCoffee from "../../our-coffee/blocks/header/js/headerOurCoffee";
import AboutOurBeans from "../../our-coffee/blocks/about-our-beans/js/aboutOurBeans";

import '../css/pleasure.css';
import src from '../img/pleasure-about.jpg';

class Pleasure extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <>
                <HeaderOurCoffee title={'For your pleasure'} clasess={'header-pleasure'}/>
                <AboutOurBeans src={src}/>
            </>
        )
    }
}

export default Pleasure;