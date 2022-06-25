import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getDocks, updateDockDetails } from '../../../store/dock';
import './UpdateDock.css'

function UpdateDock() {
    const dispatch = useDispatch();
    const docks = useSelector(state=>state.dock);

    const {dockId} = useParams();
    const dock = docks[dockId]

    const history = useHistory();
    const [errors, setErrors] = useState([]);
    const [name, setName] = useState()
    const [address, setAddress] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState('');
    const [country, setCountry] = useState('USA');
    const [cost, setCost] = useState();
    const [description, setDescription] = useState();
    const [longitude, setLongitude] = useState();
    const [latitude, setLatitude] = useState();
    const [imagePath, setImagePath] = useState();

    useEffect(()=>{
        dispatch(getDocks());
    },[dispatch])

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        const payload = {
            id: dock.id,
            user_id: dock.user_id,
            name,
            address,
            city,
            state,
            country,
            cost,
            description,
            longitude,
            latitude,
            imagePath
        };
        dispatch(updateDockDetails(payload))
            .then(()=>history.push(`/account`))
            .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
        });
        // reset();
    }

   
    return (
        <div className='update-container'>
            <div className='update-container1'>
                {errors.length>0 && (
                <div >
                    <ul className='error-upDateContainer'>
                        {errors.map((error, idx) => <li className='errorList' key={idx}>{error}</li>)}
                    </ul>
                </div>
                )}
                {!errors.length && (
                <li key={dock.id} >
                    <img className='imgDock' src={dock.imagePath} alt='dock' />
                    <div className='dockName'>{dock.name}</div>
                    <div className='dockCityState'>{dock.address}</div>
                    <div className='dockCityState'>{dock.city},{dock.state}</div>
                    <div className='dockCityState'>{dock.country}<span className="dot"></span>${dock.cost}&nbsp;/ foot</div>
                    <div className='dockDescription'>{dock.description}</div>
                    <div className='dockCityState'>latitude:&nbsp;{dock.latitude}</div>
                    <div className='dockCityState'>longitude:&nbsp;{dock.longitude}</div>

                </li>)}
            </div>
            <div className='update-container2'>
                <form onSubmit={handleSubmit} className="login-form">

                    <label>
                    Update the information...
                    </label>
                    <input
                        type="text"
                        placeholder='Enter a dock name...'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder='Enter an address...'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder='Enter a city...'
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder='Enter a state or province...'
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        required
                    />
                    <select id="country-state" name="country-state">
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        <option value='' disabled select >'Select a country...'</option>
                        <option value="USA">United States</option>
                        <option value="Canada">Canada</option>
                        <option value="Bahamas">Bahamas</option>
                        <option value="Mexico">Mexico</option>
                    </select>
                    <input
                        type="text"
                        placeholder='Enter cost...'
                        value={cost}
                        onChange={(e) => setCost(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder='Enter description...'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder='Enter latitude...'
                        value={latitude}
                        onChange={(e) => setLatitude(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder='Enter longtitude...'
                        value={longitude}
                        onChange={(e) => setLongitude(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder='Enter image path...'
                        value={imagePath}
                        onChange={(e) => setImagePath(e.target.value)}
                        required
                    />
                    <button type="submit">Submit</button>
                </form>

            </div>

        </div>
    )
};

export default UpdateDock;
