import './Account.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { deleteDock, getDocks } from '../../store/dock';
import { Link } from 'react-router-dom';

const Account = () => {
    const dispatch = useDispatch();
    const userId = useSelector(state=>state.session.user.id);
    const userName = useSelector(state=>state.session.user.username);
    const docks = useSelector(state=> state.dock)

    const deleteThisDock = (id) => {
        dispatch(deleteDock(id))
    }

    useEffect(() => {
        dispatch(getDocks())
    }, [dispatch]);

    let foundHost = false;
    let foundBook = false;

    return (
        <div className='account-outer-container'>
            <div
                className='accountHeading1'>The docks <span className='userName'>{userName}</span> is currently hosting...
            </div>
            <div className='account-dockList'>
                <div className='account-ul'>
                    <ul id='dockList'>
                        {Object.values(docks).map((dock)=>{
                            if (dock.user_id === userId) foundHost = true;
                            return(
                                dock.user_id === userId && (
                                    <li className='dockList' key={dock.id} >
                                            <img className='imgDock' src={dock.imagePath} alt='dock' />
                                            <div className='dockName'>{dock.name}</div>
                                            <div className='dockDescription'>{dock.description}</div>
                                            <div className='dockCityState'>{dock.city},{dock.state}<span className="dot"></span>${dock.cost}&nbsp;/ foot</div>
                                            <Link className="accountUpDateBtn brown-hover" to={`/docks/${dock.id}`}>UpDate</Link>
                                            <button className='accountDeleteBtn red-hover' onClick={()=>deleteThisDock(dock.id)}>Delete</button>
                                    </li>)
                            )
                        })}
                    </ul>
                </div>
                {!foundHost && (
                    <div className='notHosting' >
                        <div >NOT HOSTING YET!</div>
                        <i className="fa-regular fa-face-frown fa-2xl"></i>
                    </div>
                )}
            </div>

            <div
                className='accountHeading2'>The docks <span className='userName'>{userName}</span> has already booked...
            </div>

            {!foundBook && (
                <div className='notHosting' >
                    <div >NO BOOKINGS YET!</div>
                    <i className="fa-regular fa-face-frown fa-2xl"></i>
                </div>
            )}
        </div>
    )
}

export default Account
