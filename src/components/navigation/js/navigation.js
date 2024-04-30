import '../css/navigation.css'
export default function Navigation({onClicked, className}) {
    const combinedClass = `header-nav ${className}`;
    return (
        <div className={combinedClass}>
            <button className="btn-nav" onClick={() => onClicked('coffe house')}>Coffe house</button>
            <button className="btn-nav" onClick={() => onClicked('our coffee')}>Our coffee</button>
            <button className="btn-nav" onClick={() => onClicked('for your pleasure')}>For your pleasure</button>
        </div>
    )
}