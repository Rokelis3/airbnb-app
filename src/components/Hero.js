import gallery from '../images/group.png'

const Hero = () =>{
    const hero = (
        <div className="heroContainer">
            <div className="heroGallery">
                <img src={gallery} alt="nine different photos"/>
            </div>
            <div className="heroText">
                <h2>Online Experiences</h2>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </div>
    )
    return(
        <>
            {hero}
        </>
    )
}

export default Hero;