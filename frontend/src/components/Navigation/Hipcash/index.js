import { NavLink } from 'react-router-dom'
import './Hipcash.css'

const Hipcash = () => {
    return (
        <div className='hipcash-outer-container'>
            <div className='hipcash-left-container'>
                <img className='dock1' src='./dock.jpg' alt='dock'></img>
            </div>
            <div className='hipcash-right-container'>
                <div className='hipcash-header'>
                    Join Hipdock and invite your friends!
                </div>
                <div className='hipcash-para1'>
                    Sign up to get your referral code and earn $10 credit when your friends dock, or earn $100 cash when they host docks on their waterfront property.
                </div>
                <div className='hipcash-para2'>
                    Already a Hipdocker?
                <NavLink className="loginBtn loginBtn2" to="/login">Log in!</NavLink>
                </div>
                <div className='hipcash-signup'>
                    <NavLink className="signupBtn2" to="/signup">Sign up</NavLink>
                </div>
            </div>

        </div>
    )
}

export default Hipcash
