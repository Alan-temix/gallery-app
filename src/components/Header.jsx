const Header = ( { event } ) => {
    return(
        <div className="d-flex gallery-header">
            <h2>My Gallery</h2>
            <div>
                <h4>Type: </h4>
                <select onChange={event} className="form-select" aria-label="Default select example">
                    <option defaultValue="all">All</option>
                    <option value="photo">Photo</option>
                    <option value="illustration">Illustration</option>
                    <option value="vector">Vector</option>
                </select>
            </div>
        </div>
    )
}

export default Header;