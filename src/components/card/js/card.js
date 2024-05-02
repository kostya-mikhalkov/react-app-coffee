import '../css/card.css';

export default function Card({src, text, price, classes}) {
    const className = `card-box ${classes}`;
    return (
        <div className={className}>
            <div className="card-img">
                <img src={src} alt="picture" />
            </div>
            <p className="card-descr">
                {text}
            </p>
            <span className="card-price">{price}</span>
        </div>
    )
}