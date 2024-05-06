import { Component } from "react";
import '../css/filterButtons.css';

class FilterButtons extends Component {

    render() {
        return (
            <div className="filter">
                <p className="filter-text">Or filter</p>
                <div className="btn-box">
                    <button className="btn-filter" onClick={(e) => this.props.onChangeFilter(e)}>Brazil</button>
                    <button className="btn-filter" onClick={(e) => this.props.onChangeFilter(e)}>Kenya</button>
                    <button className="btn-filter" onClick={(e) => this.props.onChangeFilter(e)}>Columbia</button>
                    <button className="btn-filter active" onClick={(e) => this.props.onChangeFilter(e)}>All</button>
                </div>
            </div>
        )
    }
}

export default FilterButtons;