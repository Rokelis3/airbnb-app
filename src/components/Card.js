const Card = (prop) => {
    let badgeText
    if (prop.cardElement.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (prop.cardElement.location === "Online") {
        badgeText = "ONLINE"
    }

    return(
        <div className="cardContainer">
            {badgeText && <div className="cardBadge">{badgeText}</div>}
            <div className="cardImage">
                <img src={require('../images/'+ prop.cardElement.coverImg)} alt='slider element'/>
            </div>
            <div className="starContainer">
                <p><img src={require('../images/star.png')} alt="start icon"/>{prop.cardElement.stats.rating}</p>
                <div className="rating">
                    <p>({prop.cardElement.stats.reviewCount})</p>
                </div>
                <div className="country">
                    <p>• {prop.cardElement.location}</p>
                </div>
            </div>
            <div className="cardText">
                <div className="cardQuote">
                    <p>{prop.cardElement.title}</p>
                </div>
                <div className="cardPrice">
                    <p><span>From ${prop.cardElement.price}/</span> person</p>
                </div>
            </div>
        </div>
    )
}

export default Card;