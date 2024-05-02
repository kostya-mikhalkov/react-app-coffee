import '../css/navigation.css'
export default function Navigation({onClicked, className, classes}) {
    const combinedClass = `header-nav ${className}`;
    const combinedClassElem = `btn-nav ${classes}`;
    return (
        <div className={combinedClass}>
            <button className={combinedClassElem} onClick={() => onClicked('coffe house')}>Coffe house</button>
            <button className={combinedClassElem} onClick={() => onClicked('our coffee')}>Our coffee</button>
            <button className={combinedClassElem} onClick={() => onClicked('for your pleasure')}>For your pleasure</button>
        </div>
    )
}