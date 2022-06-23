import './Account.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { getDocks } from '../../store/dock';

const Account = () => {
    const dispatch = useDispatch();
    const userId = useSelector(state=>state.session.user.id);
    const userName = useSelector(state=>state.session.user.username);
    const docks = useSelector(state=> state.dock)


    useEffect(() => {
        dispatch(getDocks())
    }, [dispatch]);

    return (
        <div className='account-outer-container'>
            <div className='nearHeadingOne'>The docks {userName} is currently hosting</div>

            <ul>
                {Object.values(docks).map((dock)=>{
                    return(
                        dock.user_id === userId && (<li key={dock.id} >
                                    <img className='imgDock' src={dock.imagePath} alt='dock' />
                                    <div className='dockName'>{dock.name}</div>
                                    <div className='dockDescription'>{dock.description}</div>
                                    <div className='dockCityState'>{dock.city},{dock.state}<span className="dot"></span>${dock.cost}&nbsp;/ foot</div>
                                    <button className="accountUpDateBtn">UpDate</button>
                                    <button className='accountDeleteBtn'>Delete</button>
                                </li>)
                    )
                })}
            </ul>

        </div>
    )
}

export default Account
