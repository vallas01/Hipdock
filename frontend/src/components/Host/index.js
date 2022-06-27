import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createDock } from '../../store/dock';

import './Host.css'

const Host = () => {
    const sessionUser = useSelector((state)=>state.session.user);
    const history = useHistory();
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);
    const [name, setName] = useState()
    const [address, setAddress] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [cost, setCost] = useState();
    const [description, setDescription] = useState();
    const [longitude, setLongitude] = useState();
    const [latitude, setLatitude] = useState();
    const [imagePath, setImagePath] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        const user_id = sessionUser.id
        const newDock = {
            user_id,
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
        dispatch(createDock(newDock))
            .then(()=>history.push(`/account`))
            .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
        });
        reset();
    }

    const reset = () => {
        setName('');
        setAddress('');
        setCity('');
        setState('');
        setCountry('');
        setCost('');
        setDescription('');
        setLongitude('');
        setLatitude('');
        setImagePath('');
    }

    return (
        <div className='host-outer-container'>

            {errors.length>0 && (
            <ul className='error-container'>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            )}
            <form onSubmit={handleSubmit} className="login-form">

                <label>
                Enter your dock information...
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



    )
}

export default Host
