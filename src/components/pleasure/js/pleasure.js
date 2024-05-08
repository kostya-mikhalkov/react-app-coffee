import { Component } from "react";
import HeaderOurCoffee from "../../our-coffee/blocks/header/js/headerOurCoffee";
import AboutOurBeans from "../../our-coffee/blocks/about-our-beans/js/aboutOurBeans";
import PleasureCard from "../blocks/pleasure-cars/js/pleasureCard";
import Footer from '../../coffee-house/blocks/footer/js/footer';

import '../css/pleasure.css';
import src from '../img/pleasure-about.jpg';

import card1 from '../../coffee-house/img/card1.jpg';
import card2 from '../../coffee-house/img/card2.jpg';
import card3 from '../../coffee-house/img/card3.jpg';

class Pleasure extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [
                {id:1, name: 'AROMISTICO Coffee 1 kg', src: card1, country: 'Brazil', price: 6.99},
                {id:2, name: 'AROMISTICO Tesy 1 kg', src: card2, country: 'Columbia', price: 6.99},
                {id:3, name: 'AROMISTICO Coffee 1 kg', src: card3, country: 'Brazil', price: 6.99},
                {id:4, name: 'AROMISTICO Coffee 1 kg', src: card1, country: 'Kenya', price: 10.99},
                {id:5, name: 'AROMISTICO Coffee 1 kg', src: card2, country: 'Columbia', price: 6.99},
                {id:6, name: 'AROMISTICO Coffee 1 kg', src: card3, country: 'Kenya', price: 8.99}
            ],
            activeCard: null
        };
    }

    changeStateCard = (e) => {
        this.setState({
            activeCard: e.target.getAttribute("data-id")
        })
    }

    render() {
        return (
            <>
                <HeaderOurCoffee title={'For your pleasure'} clasess={'header-pleasure'}/>
                <AboutOurBeans src={src}/>
                <PleasureCard data={this.state.arr} 
                              active={this.state.activeCard} 
                              onClicked={this.changeStateCard}/>
                <Footer />
            </>
        )
    }
}

export default Pleasure;