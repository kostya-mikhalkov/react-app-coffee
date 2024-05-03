import { Component } from "react";
import '../css/searchPanel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.onChangeValue = this.onChangeValue.bind(this);
    }

    onChangeValue(e) {
        this.setState({
            value: e.currentTarget.value
        })
        this.props.onChanged(e);
    }

    render() {
        return (
            <div className="search">
                <label htmlFor="searching">Lookiing for</label>
                <input type="text" id="searching" 
                       placeholder="start typing here..."
                       value={this.state.value}
                       onChange={this.onChangeValue}/>
            </div>
        )
    }
}

export default SearchPanel;