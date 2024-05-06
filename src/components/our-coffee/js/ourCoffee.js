import { Component } from "react";

import HeaderOurCoffee from "../blocks/header/js/headerOurCoffee";
import AboutOurBeans from "../blocks/about-our-beans/js/aboutOurBeans";
import OurCoffeeFilter from "../blocks/our-cofee-filter/js/ourCoffeeFilter";
import Footer from "../../coffee-house/blocks/footer/js/footer";
import CardFilter from "../blocks/card-filter/js/cardFilter";

import '../css/ourCoffee.css';

import card1 from '../../coffee-house/img/card1.jpg';
import card2 from '../../coffee-house/img/card1.jpg';
import card3 from '../../coffee-house/img/card1.jpg';

class OurCoffee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activity: null,
            arr: [
                {id:1, name: 'AROMISTICO Coffee 1 kg', src: card1, country: 'Brazil', price: 6.99},
                {id:2, name: 'AROMISTICO Tesy 1 kg', src: card2, country: 'Columbia', price: 6.99},
                {id:3, name: 'AROMISTICO Coffee 1 kg', src: card3, country: 'Brazil', price: 6.99},
                {id:4, name: 'AROMISTICO Coffee 1 kg', src: card1, country: 'Kenya', price: 10.99},
                {id:5, name: 'AROMISTICO Coffee 1 kg', src: card2, country: 'Columbia', price: 6.99},
                {id:6, name: 'AROMISTICO Coffee 1 kg', src: card3, country: 'Kenya', price: 8.99}
            ],
        }
    }

    changed = (e) => {
        this.setState({
            activity: e.target.getAttribute('data-id'),
        })
    }
    render() {
        return (
            <div className="our-coffee">
                <HeaderOurCoffee />
                {/* <AboutOurBeans />
                <OurCoffeeFilter onChanged={this.changed}/> */}
                {(() => {
                    if (this.state.activity !== null) {
                        return (<CardFilter data={this.state.arr} onClicked={this.changed} active={this.state.activity}/>)
                    } else {
                        return (
                            <>
                                <AboutOurBeans />
                                <OurCoffeeFilter onChanged={this.changed}/>
                            </>
                        )
                    }
                })()}
                <Footer />
            </div>
        )
    }
}

export default OurCoffee;