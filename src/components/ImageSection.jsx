const BodyGrid = (props) => {
    let { webformatURL } = props
    return(
        <div className="individual-image-section">
            <img src={webformatURL} />
        </div>
    )
}

export default BodyGrid;