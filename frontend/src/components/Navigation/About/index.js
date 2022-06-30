import './About.css'

const About = () => {
    return (
        <div className='about-outer-container'>
            <div className='headingOne'>MY STORY</div>
            <div className='headingTwo'>It started with a pie</div>
            <div className='aboutP'><p>&nbsp; &nbsp;This journey began with a father-son project and a small basic computer — a Raspberry Pi. &nbsp; As an avid sailor who loves DIY projects, I decided to build a chartplotter that would show the location and course of our sailboat and also the location and heading of other ships. &nbsp; Having our chart plotted on a TV monitor would let me see where the helmsman is taking us while I'm down below cooking in the galley. &nbsp; That information would have helped avoid a near miss collision with a huge barge<em> but that is another story</em>.</p></div>
            <div className='aboutP'>&nbsp; &nbsp;Fustration set in quickly with the Raspberry Pi. &nbsp; Micro-computers like Raspberries and Arduinos are great for teaching kids computer science and for building small projects but for more complicated projects you will need to start writing code. &nbsp; As a co-op student I built a PC at IBM but that was 30 years ago and other than a couple websites, I haven't done any real coding since my college days. &nbsp; It was humbling to not know how to program the Raspberry with Python.  &nbsp; It was even more humbling to not even know that Python was a programming language!!! </div>
            <div className='aboutP'>&nbsp; &nbsp;Learning to code...wow, did I not know what I was getting into. &nbsp; After a few false starts, I decided to find an online course. &nbsp; Do it right or don't do it it all, right? &nbsp; I got accepted into what is arguably the best bootcamp out there - App Academy!&nbsp;  Intense, and there were set-backs but I was more determined than ever to finish what I started. &nbsp; I still have a few more weeks to go but look at what I can do already. &nbsp; Does that ship's bell annoy you? &nbsp; Sorry.  &nbsp; It's just a couple lines of code but it was so much fun figuring it out!</div>
            <div className='aboutP'>&nbsp; &nbsp;The chartplotter, by the way came out great but more importantly I am on my way to mastering another new skill.&nbsp;Oh, and now I can definitely teach my son how to program that Raspberry P!!! </div>

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

export default About
