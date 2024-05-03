import { Component } from "react";
import '../css/filterButtons.css';

class FilterButtons extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="filter">
                <p className="filter-text">Or filter</p>
                <div className="btn-box">
                    <button className="btn-filter">Brazil</button>
                    <button className="btn-filter">Kenya</button>
                    <button className="btn-filter">Columbia</button>
                </div>
            </div>
        )
    }
}

export default FilterButtons;