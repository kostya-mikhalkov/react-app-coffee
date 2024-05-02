import Navigation from "../../../../navigation/js/navigation";
import '../css/headerOurCoffee.css';

export default function HeaderOurCoffee() {
    return (
        <header className="header">
            <Navigation className="header-nav" />
            <h1 className="header-title">Our Coffee</h1>
        </header>
    )
}