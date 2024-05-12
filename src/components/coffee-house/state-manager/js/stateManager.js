import {Component} from 'react';

import CoffeeHouse from '../../../coffee-house/js/coffeeHouse';
import OurCoffee from '../../../our-coffee/js/ourCoffee';
import Pleasure from '../../../pleasure/js/pleasure';

class StateManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'home'
        }
    }

    setPage = (page) => {
        this.setState({
            page
        })
    }

    render() {
        const {page} = this.state;
        let PageComponent;
        if (page === 'coffee house') {
            PageComponent = CoffeeHouse;
        } else if (page === 'our coffee') {
            PageComponent = OurCoffee;
        } else if (page === 'for your pleasure') {
            PageComponent = Pleasure;
        }

        return (
            <div>
                <PageComponent onClicked={this.setPage}/>
            </div>
        )
    }
}
export default StateManager;