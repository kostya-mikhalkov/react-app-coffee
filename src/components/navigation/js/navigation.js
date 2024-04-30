import '../css/navigation.css'
export default function Navigation({onClicked, className}) {
    return (
        <div className={className}>
            <button className="btn-nav" onClick={() => onClicked('coffe house')}>Coffe house</button>
            <button className="btn-nav" onClick={() => onClicked('our coffee')}>Our coffee</button>
            <button className="btn-nav" onClick={() => onClicked('for your pleasure')}>For your pleasure</button>
        </div>
    )
}