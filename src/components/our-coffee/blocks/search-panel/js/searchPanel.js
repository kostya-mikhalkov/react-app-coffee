import { Component } from "react";
import '../css/searchPanel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    render() {
        return (
            <div className="search">
                <label htmlFor="searching">Lookiing for</label>
                <input type="text" id="searching" 
                       placeholder="start typing here..."
                       value={this.state.value}/>
            </div>
        )
    }
}

export default SearchPanel;