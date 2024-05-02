import Card from "../../../../card/js/card";
import card1 from "../../../img/card1.jpg";
import card2 from "../../../img/card2.jpg";
import card3 from "../../../img/card3.jpg";
import '../css/ourBest.css';

export default function OurBest() {
    return (
        <section className="ourBest">
            <div className="ourBest-wrapp">
                <h2 className="ourBest-title">Our best</h2>
                <div className="ourBest-box">
                    <Card src={card1} text='Solimo Coffee Beans 2 kg' price='10.73$'/>
                    <Card src={card2} text='Presto Coffee Beans 1 kg' price='15.99$'/>
                    <Card src={card3} text='AROMISTICO Coffee 1 kg' price='6.99$'/>
                </div>
            </div>
        </section>
    )
}