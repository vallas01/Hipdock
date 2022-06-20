import './NearMe.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { getDocks } from '../../store/dock';

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
            <div className='nearHeadingOne'>UNDER CONSTRUCTION</div>

            <ul>
                {Object.values(dock).map((dock)=>{
                    return(
                        <li key={dock.id}>
                            <img className='imgDock' src={dock.imagePath} alt='dock' />
                            <div>{dock.name}</div>
                            <div>{dock.city}<span class="dot"></span>{dock.state}</div>
                        </li>
                    )
                })}
            </ul>

        </div>
    )
}

export default NearMe
