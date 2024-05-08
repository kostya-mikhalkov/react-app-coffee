import '../css/pleasureCard.css';
import img from '../../../../coffee-house/svg/beans-logo-black.svg';

export default function PleasureCard({data, onClicked, active}) {
    let elem;
    console.log(data)
    if (active !== null) {
        elem = data.map(({src, country, price, id}) => {
        if (active == id) {
            return (
                <section className="about" onClick={(e) => onClicked(e)}>
                    <div className="about-img">
                        <img src={src} alt="picture" />
                    </div>
                    <div className="about-descr">
                        <h2 className="about-title">About our beans</h2>
                        <img src={img} alt="picture" />
                        <p className="about-text-card">
                            Country: {country}
                        </p>
                        <p className="about-text-card">
                            Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p className="about-text-card">
                            Price:  <span className='price'>{price}$</span>
                        </p>
                    </div>
                </section>
                )
        }
    })
    } else {
        elem = data.map(({src, name, country, price, id}) => {
                return (
                <div className='card-box' data-id={id} onClick={(e) => onClicked(e)}>
                    <div data-id={id} className="card-img">
                        <img data-id={id} src={src} alt="picture" />
                    </div>
                    <p className="card-descr" data-id={id}>
                        {name}
                    </p>
                    <span className='card-country' data-id={id}>{country}</span>
                    <span className="card-price" data-id={id}>{price}</span>
                </div>
                )
            })
    }
    return (
        <div className="pleasure-flex">
            {elem}
        </div>
    )
}