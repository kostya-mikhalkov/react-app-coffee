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
                {id:2, name: 'AROMISTICO Tesy 1 kg', src: card2, country: 'Columbia', price: 6.99},
                {id:3, name: 'AROMISTICO Coffee 1 kg', src: card3, country: 'Brazil', price: 6.99},
                {id:4, name: 'AROMISTICO Coffee 1 kg', src: card1, country: 'Kenya', price: 10.99},
                {id:5, name: 'AROMISTICO Coffee 1 kg', src: card2, country: 'Columbia', price: 6.99},
                {id:6, name: 'AROMISTICO Coffee 1 kg', src: card3, country: 'Kenya', price: 8.99}
            ],
            valueSearch: '',
            valueFilter: '',
            activeCard: null
        }
        this.changeSearchInput = this.changeSearchInput.bind(this);
        this.changeFilter = this.changeFilter.bind(this);
    }

    changeSearchInput(e) {
        this.setState({
            valueSearch: e.currentTarget.value
        })
    }

    changeFilter(e) {
        this.setState({
            valueFilter: e.currentTarget.innerText
        })
        const arr = document.querySelectorAll('.btn-filter');
        arr.forEach(item => item.classList.remove('active'));
        e.target.classList.add('active');
    }

    searchElements = (arr, item) => {
        if (item.length <= 0) {
            return arr;
        }
        return arr.filter(items => items.name.indexOf(item) > -1);
    } 

    filterRenderElement = (arr, val) => {
        return (val !== "All" && val !== '') ? arr.filter(item => item.country === val) : arr;
    }

    clickedCards = (e) => {
        this.setState({
            activeCard: e.target.getAttribute('data-id')
        })
        this.props.onChanged(e);
    }

    render() {
        const active = this.state.activeCard;
        const arr = this.filterRenderElement(this.searchElements(this.state.arr, this.state.valueSearch), this.state.valueFilter);
        return(
            <div className='coffee-filter'>
                <div className="panel">
                    <SearchPanel onChanged={this.changeSearchInput}/>
                    <FilterButtons onChangeFilter={this.changeFilter}/>
                </div>
                <div className="card">
                    <CardFilter data={arr} onClicked={this.clickedCards} active={active}/>
                </div>
            </div>
        )
    }
}

export default OurCoffeeFilter;