import './technology.css'

const Technology = () => {
    return (
        <div className='about-outer-container'>
            <div className='headingOne'>MY SKILL SET</div>
            <div className='headingTwo'>Technologies used for this project</div>


            <div className='tech-container'>
                <div className='tech'>
                    <i className="fa-brands fa-js fa-2xl"></i>
                    <a className="developer-link" href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' >JavaScript</a>
                </div>
                <div className='tech'>
                    <i className="fa-brands fa-css3-alt fa-2xl"></i>
                    <a className="developer-link" href='https://developer.mozilla.org/en-US/docs/Web/css' >CSS Documentation</a>
                </div>
                <div className='tech'>
                    <i className="fa-brands fa-html5 fa-2xl"></i>
                    <a className="developer-link" href='https://developer.mozilla.org/en-US/docs/Web/HTML' >HTML Documentation</a>
                </div>
                <div className='tech'>
                    <i className="fa-brands fa-reacteurope fa-2xl"></i>
                    <a className="developer-link" href='https://redux.js.org/' >Redux Documentation</a>
                </div>
                <div className='tech'>
                    <i className="fa-brands fa-react fa-2xl"></i>
                    <a className="developer-link" href='https://reactjs.org/docs/getting-started.html' >React Documentation</a>
                </div>
                <div className='tech'>
                    <i className="fa-brands fa-font-awesome fa-2xl"></i>
                    <a className="developer-link" href='https://fontawesome.com/' >Font Awesome</a>
                </div>
                <div className='tech'>
                    <i className="fa-solid fa-database fa-2xl"></i>
                    <a className="developer-link" href='https://www.postgresql.org/' >PostgreSQL</a>
                </div>
                <div className='tech'>
                    <i className="fa-brands fa-node fa-2xl"></i>
                    <a className="developer-link" href='https://expressjs.com/en/api.html' >Express</a>
                </div>
                <div className='tech tech-heroku'>
                    <img className='heroku' src='./heroku-logo.png' alt="logo"></img>
                    <a className="heroku-link" href='https://www.heroku.com/' >Heroku</a>
                </div>
            </div>



        </div>
    )
}

export default Technology
