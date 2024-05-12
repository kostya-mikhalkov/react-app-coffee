import '../css/headerCoffeeHouse.css';
import Navigation from "../../../../navigation/js/navigation";

export default function HeaderCoffeeHouse(props) {
    return (
        <section className="header">
            <Navigation className="header-nav nav" onClicked={props.onClicked}/>
                <h1 className="coffee-title">
                    Everything You Love About Coffee
                </h1>
        </section>
    )
}