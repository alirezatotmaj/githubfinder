import spin from './Spinner.jpg'

function Spinner() {
    return (
        <img
            src={spin}
            alt="spinner"
            style={{
                width: "150x",
                height: "150px",
                margin: "auto",
                display: "block"
            }}/>
    )
}

export default Spinner