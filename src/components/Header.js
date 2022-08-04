

const Header = () => {
    const header = (
        <div className="header">
            <div className="logo">
                <img src={require('../images/airbnb2.jpg')} alt="logo"/>
            </div>
        </div>
    )
    return(
        <>
            {header}
        </>
    )
}

export default Header;