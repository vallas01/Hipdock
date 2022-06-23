import './NearMe.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { getDocks } from '../../store/dock';
import { NavLink } from 'react-router-dom';

const NearMe = () => {
    const dispatch = useDispatch();
    const dock = useSelector(state=> {
        return state.dock;
    })

    useEffect(() => {
        dispatch(getDocks())
    }, [dispatch]);

    return (
        <div className='nearMe-outer-container'>
            <div className='nearHeadingOne'>Where would you like to dock?</div>

            <ul>
                {Object.values(dock).map((dock)=>{
                    return(
                        <li key={dock.id} >
                            <NavLink to={{
                                pathname:`/login`,
                                aboutProps:{dockId:`${dock.id}`}
                            }}>
                                <img className='imgDock' src={dock.imagePath} alt='dock' />
                            </NavLink>
                            <div className='dockName'>{dock.name}</div>
                            <div className='dockDescription'>{dock.description}</div>
                            <div className='dockCityState'>{dock.city},{dock.state}<span className="dot"></span>${dock.cost}&nbsp;/ foot</div>
                        </li>
                    )
                })}
            </ul>

        </div>
    )
}

export default NearMe
