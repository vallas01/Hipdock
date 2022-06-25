import './Contact.css'

const Contact = () => {
    return (
        <div className='contact-outer-container'>
            <div className='conHeadOne'>CONTACT INFO</div>
            <div className='conHeadTwo'>Please permit me to present myself as a candidate for your firm.</div>
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
                    <i className="fa-brands fa-github-square"></i>
                    <a href='https://github.com/vallas01'  className='developer-link'>GitHub</a>
                    <i className="fa-brands fa-linkedin"></i>
                    <a href='https://www.linkedin.com/in/andrew-vallas-221b5a241/' className='developer-link'>LinkedIn</a>
                </div>
            </div>

        </div>
    )
}

export default Contact;
