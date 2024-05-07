import Navigation from "../../../../navigation/js/navigation";
import '../css/headerOurCoffee.css';

export default function HeaderOurCoffee({title, clasess}) {

    return (
        <header className={clasess}>
            <Navigation className="header-nav" />
            <h1 className="header-title">{title}</h1>
        </header>
    )
}