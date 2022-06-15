import './Splash.css';


function Splash() {


    return (
        <div className='splash-container'>
            <div className='Title'>Find yourself outside.</div>
            <p className='Title-tag'>Discover and book a dock, a slip, or mooring and enjoy.</p>
            <div className='img-container'>
                <img className='img-sail' src= './sailboat.jpg'  alt='sailboat'></img>
            </div>
            <div className='img-links'>
                <div className='img-row'>
                    <img className='img1 img-sail img-dock' src= './housedock1.png'  alt='sailboat'></img>
                    <img className='img2 img-sail img-dock' src= './housedock3.jpg'  alt='sailboat'></img>
                </div>
                <div className='img-row'>
                    <img className='img1 img-sail img-dock' src= './housedock2.jpg'  alt='sailboat'></img>
                    <img className='img2 img-sail img-dock' src= './housedock4.png'  alt='sailboat'></img>
                </div>
            </div>
        </div>
    );
}

export default Splash;
