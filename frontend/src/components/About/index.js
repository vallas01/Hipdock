import './about.css'

const About = () => {
    return (
        <div className='about-outer-container'>
            <div className='headingOne'>MY STORY</div>
            <div className='headingTwo'>It started with a pie</div>
            <div className='aboutP'>This programmer's story began with a small father-son project and a basic computer — a Raspberry Pi. They were crashing on California’s Central Coast at Andrew Molera State Park as Hipcamp founder and CEO Alyssa Ravasio watched in frustration.</div>
            <div className='about-developer'>
                <img className='about-image' src='./andrew.png' alt='me'></img>
                <p className='developer-info'>Developed by Andrew Vallas</p>
                <a href='https://github.com/vallas01/Hipsail'  className='developer-link'>Github</a>
                <a href='https://www.linkedin.com/in/andrew-vallas-221b5a241/' className='developer-link'>LinkedIn</a>
            </div>
            <div className='tech-div'>
                <p className='tech-header'>Technologies Used</p>
                <a className="developer-link" href='https://expressjs.com/en/api.html' >Express</a>
                <i class="fa-brands fa-node"></i>
                <i class="fa-brands fa-react"></i>
                <i class="fa-brands fa-github-square"></i>
                <i class="fa-brands fa-js"></i>
                <i class="fa-brands fa-linkedin"></i>
                <a className="developer-link" href='https://reactjs.org/docs/getting-started.html' >React Documentation</a>
                <a className="developer-link" href='https://redux.js.org/' >Redux Documentation</a>
            </div>
        </div>
    )
}

export default About
