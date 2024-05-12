// Navigation.js
import { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/navigation.css'

class Navigation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {className, classes} = this.props;
        const combinedClassElem = `btn-nav ${classes}`;
        return (
            <div className={className}>
                <Link className={combinedClassElem} to="/coffee-house">Coffe house</Link>
                <Link className={combinedClassElem} to="/our-coffee">Our coffee</Link>
                <Link className={combinedClassElem} to="/for-your-pleasure">For your pleasure</Link>
            </div>
        )
    }
}
export default Navigation;
