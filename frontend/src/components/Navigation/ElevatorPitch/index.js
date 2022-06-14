import './ElevatorPitch.css'

const ElevatorPitch = () => {
    return (
        <div className='elevator-outer-container'>
            <div className='eleHeadOne'>AN ELEVATOR PITCH</div>
            <div className='eleHeadTwo'>An app that helps unite the boating community by connecting boaters with home owners and businesses willing to share a dock.</div>
            <div className='aboutP'><p>&nbsp; &nbsp;Add your pitch here...</p></div>
            <div className='aboutP'><p>&nbsp; &nbsp;Add your pitch here...</p></div>
            <div className='aboutP'><p>&nbsp; &nbsp;Add your pitch here...</p></div>

            <div className='about-inner-container'>
                <div className="aboutMe">
                    <img className='aboutImage' src='./Andrew.jpg' alt='me'></img>
                    <img className='aboutImage' src='./Andrew2.png' alt='me'></img>
                    <p>Developed by Andrew Vallas</p>
                </div>
                <div className="aboutLinks">
                    <i class="fa-brands fa-github-square"></i>
                    <a href='https://github.com/vallas01/Hipsail'  className='developer-link'>GitHub</a>
                    <i class="fa-brands fa-linkedin"></i>
                    <a href='https://www.linkedin.com/in/andrew-vallas-221b5a241/' className='developer-link'>LinkedIn</a>
                </div>
            </div>

        </div>
    )
}

export default ElevatorPitch;
