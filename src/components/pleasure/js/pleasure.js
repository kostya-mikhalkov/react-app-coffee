import { Component } from "react";
import HeaderOurCoffee from "../../our-coffee/blocks/header/js/headerOurCoffee";

import '../css/pleasure.css';

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
            </>
        )
    }
}

export default Pleasure;