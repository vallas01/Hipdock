import './ElevatorPitch.css'

const ElevatorPitch = () => {
    return (
        <div className='elevator-outer-container'>
            <div className='eleHeadOne'>AN ELEVATOR PITCH</div>
            <div className='eleHeadTwo'>An app that helps unite the boating community by connecting boaters with home owners and businesses willing to share a dock.</div>
            <div className='eleHeadThree'><p>&nbsp; &nbsp;THE COMPETITION</p></div>
            <div className='competition-container'>
                   <a href='https://www.piershare.com' className='competition-link'>Pier Share</a>
                   <a href='https://www.dockskipper.com' className='competition-link'>Dock Skipper</a>
                   <a href='https://www.docks4rent.com' className='competition-link'>Docks4Rent</a>
                   <a href='https://www.docks411.com' className='competition-link'>Docks411</a>
                   <a href='https://www.connectthedocks.com' className='competition-link'>Connect the Docks</a>
            </div>

            <div className='elevator-inner-container'>
                <div className="aboutMe">
                    <img className='aboutImage' src='./Andrew.jpg' alt='me'></img>
                    <img className='aboutImage' src='./Andrew2.png' alt='me'></img>
                    <p>Developed by Andrew Vallas</p>
                </div>
                <div className="aboutLinks">
                    <i className="fa-brands fa-github-square"></i>
                    <a href='https://github.com/vallas01/Hipsail'  className='developer-link'>GitHub</a>
                    <i className="fa-brands fa-linkedin"></i>
                    <a href='https://www.linkedin.com/in/andrew-vallas-221b5a241/' className='developer-link'>LinkedIn</a>
                </div>
            </div>

        </div>
    )
}

export default ElevatorPitch;
