const BodyGrid = (props) => {
    let { webformatURL } = props
    return(
        <div className="individual-image-section">
            <img alt="art-paint" src={webformatURL} />
        </div>
    )
}

export default BodyGrid;