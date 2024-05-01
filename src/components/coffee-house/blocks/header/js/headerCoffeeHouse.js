import '../css/headerCoffeeHouse.css';
import Navigation from "../../../../navigation/js/navigation";

export default function HeaderCoffeeHouse() {
    return (
        <section className="header">
            <Navigation className="nav" />
            <div className="header-about">
                <h1 className="header-title">
                    Everything You Love About Coffee
                </h1>
                <img src="./" alt="" className="header-img" />
            </div>
        </section>
    )
}