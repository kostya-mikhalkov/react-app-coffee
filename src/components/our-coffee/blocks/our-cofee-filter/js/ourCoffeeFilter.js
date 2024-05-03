import {Component} from 'react';
import '../css/ourCoffeeFilter.css';
import SearchPanel from '../../search-panel/js/searchPanel';
import FilterButtons from '../../filter-buttons/js/filterButtons';
import CardFilter from '../../card-filter/js/cardFilter';

import card1 from '../../../../coffee-house/img/card1.jpg';
import card2 from '../../../../coffee-house/img/card2.jpg';
import card3 from '../../../../coffee-house/img/card3.jpg';

class OurCoffeeFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [
                {id:1, name: 'AROMISTICO Coffee 1 kg', src: card1, country: 'Brazil', price: 6.99},
                {id:2, name: 'AROMISTICO Coffee 1 kg', src: card2, country: 'Brazil', price: 6.99},
                {id:3, name: 'AROMISTICO Coffee 1 kg', src: card3, country: 'Brazil', price: 6.99},
                {id:4, name: 'AROMISTICO Coffee 1 kg', src: card1, country: 'Kenya', price: 10.99},
                {id:5, name: 'AROMISTICO Coffee 1 kg', src: card2, country: 'Brazil', price: 6.99},
                {id:6, name: 'AROMISTICO Coffee 1 kg', src: card3, country: 'Kenya', price: 8.99}
            ]
        }
    }

    render() {
       const newArr = [...this.state.arr];
       const elements = newArr.map(({name, src, country, price, id}) => {
        return <CardFilter key={id} name={name} src={src} country={country} price={price}/>
       })
        return(
            <div className='coffee-filter'>
                <div className="panel">
                    <SearchPanel />
                    <FilterButtons />
                </div>
                <div className="card">
                    {elements}
                </div>
            </div>
        )
    }
}

export default OurCoffeeFilter;