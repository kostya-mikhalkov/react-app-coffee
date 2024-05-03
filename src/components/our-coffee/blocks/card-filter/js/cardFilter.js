import '../css/cardFilter.css';

export default function CardFilter({name, src, country, price}) {
    return (
        <div className='card-box'>
            <div className="card-img">
                <img src={src} alt="picture" />
            </div>
            <p className="card-descr">
                {name}
            </p>
            <span className='card-country'>{country}</span>
            <span className="card-price">{price}</span>
        </div>
    )
}