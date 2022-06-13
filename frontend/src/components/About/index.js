import './about.css'

const About = () => {
    return (
        <div className='about-outer-container'>
            <div className='headingOne'>MY STORY</div>
            <div className='headingTwo'>It started with a pie</div>
            <div className='aboutP'><p>&nbsp; &nbsp;This journey began with a father-son project and a small basic computer — a Raspberry Pi. &nbsp; As an avid sailor who loves DIY projects, I decided to build a chartplotter that would show the location and course of our sailboat and also the location and heading of other ships. &nbsp; Displaying a chartplotter on a TV monitor would let me see where the helmsman is taking us while I'm cooking. &nbsp; That information would have help avoid a potentially deadly near miss collision with a barge<em> but that is another story</em>.</p></div>
            <div className='aboutP'>&nbsp; &nbsp;Fustration sets in quickly with the Raspberry Pi. &nbsp; Micro-computers like Raspberries and Arduinos are great for teaching kids computer science and for building small projects but for more complicated projects you will need to start writing code. &nbsp; As a co-op student I built a PC at IBM but that was 30 years ago and other than a couple websites, I haven't done any real coding since my college days. &nbsp; It was humbling to not know how to program the Raspberry with Python.  &nbsp; It was even more humbling to not even know what was Python!!! </div>
            <div className='aboutP'>Learning to code...</div>
            <div className='aboutP'>The chartplotter came out great but more importantly I can now teach my son how to program the Raspberry P!!! </div>

            <div className='about-developer'>
                <img className='about-image' src='./andrew.png' alt='me'></img>
                <p className='developer-info'>Developed by Andrew Vallas</p>
                <i class="fa-brands fa-github-square"></i>
                <a href='https://github.com/vallas01/Hipsail'  className='developer-link'>Github</a>
                <i class="fa-brands fa-linkedin"></i>
                <a href='https://www.linkedin.com/in/andrew-vallas-221b5a241/' className='developer-link'>LinkedIn</a>
            </div>

        </div>
    )
}

export default About
