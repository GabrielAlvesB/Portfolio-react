import "./Glitch.css"
const Glitch = ({name}) => {
    const nome = name
    return (
        <div className="loader ">
            <div data-glitch={nome} className="glitch">{nome}</div>
        </div>
    )
}

export default Glitch