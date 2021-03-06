import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { createBooking } from '../../../store/book';
import './MakeBooking.css'

const MakeBooking = ()=>{
    const dispatch = useDispatch();
    const history = useHistory()
    const { dockId } = useParams();

    const docks = useSelector((state)=>state.dock)
    const dock = docks[dockId]

    let today = new Date()
    let d1Int = today.getDate() + 1;
    let d1 = d1Int < 10 ? '0' + d1Int.toString() : d1Int.toString()

    let mInt = today.getMonth() + 1
    let m = mInt < 10 ? '0' + mInt.toString() : mInt.toString()

    let yearInt = today.getFullYear()
    let yearMax = yearInt + 1;
    let y = yearInt.toString();
    let y1 = yearMax.toString();

    const sessionUser= useSelector((state)=>state.session.user)
    const [error, setError]=useState([])
    const [startDate,setStartDate] = useState(`${y}-${m}-${d1}`);
    const [endDate, setEndDate] = useState('');
    const [length, setLength] = useState(20);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError([]);
        const checkStart = new Date(startDate)
        const checkEnd = new Date(endDate)

        if(checkStart>=checkEnd){
            error.push("Starting date can not come on or after ending date.");
            setError(error);
            reset();
            return;
        }

        if(checkStart<today){
            error.push("Earliest start date is tomorrow.")
            setError(error);
            reset();
            return;
        }

        if( length < 20 || length > 65 || isNaN(length) ){
            error.push("Boat length reservation must be between 20 and 65 feet.")
            setError(error);
            reset();
            return;
        }

        const diffTime = checkEnd.getTime() - checkStart.getTime()
        const daysTotal = diffTime / (1000 *3600 * 24)
        let costBook = dock.cost * daysTotal * length

        const user_id = sessionUser.id
        const dock_id = dockId
        const newBooking = {
            user_id,
            dock_id,
            startDate,
            endDate,
            totalCost: costBook,
        };


        dispatch(createBooking(newBooking))
            .then(()=>history.push(`/account`))
            .catch(async (res) => {
            const data = await res.json();
            console.log(data)
            // if (data && data.errors) setErrors(data.errors);
        });
        reset();
    }

    const reset = () => {
        setStartDate(`${y}-${m}-${d1}`);
        setEndDate('');
        setLength('20');
    }


    return (
        <div className='booking-outer-container'>
            <div className='booking-dock-container1'>
                <li key={dock.id} >
                    <img className='imgDock' src={dock.imagePath} alt='dock' />
                    <div className='dockName'>{dock.name}</div>
                    <div className='dockCityState'>{dock.address}</div>
                    <div className='dockCityState'>{dock.city},{dock.state}</div>
                    <div className='dockCityState'>{dock.country}<span className="dot"></span>${dock.cost}&nbsp;/ foot</div>
                    <div className='dockDescription'>{dock.description}</div>
                    <div className='dockCityState'>latitude:&nbsp;{dock.latitude}</div>
                    <div className='dockCityState'>longitude:&nbsp;{dock.longitude}</div>
                </li>
            </div>

            <div className="booking-form-container">

                { error.length>0 && (<div className="errors">
                    <ul className='bookingErrorList' >
                        {error.map((errorMess,idx) => (
                        <li
                            className='bookingErrorListItem'
                            key={idx}>{errorMess}
                        </li>
                        ))}
                    </ul>
                </div>)}

                <form onSubmit={handleSubmit} className="booking-form">

                    <label>
                    Enter your arrival date...
                    </label>
                    <input
                        type="date"
                        placeholder='start date...'
                        value={startDate}
                        min={`${y}-${m}-${d1}`}
                        onChange={(e) => setStartDate(e.target.value)}
                        required
                        />
                    <label>
                    Enter your departure date...
                    </label>
                    <input
                        type="date"
                        placeholder='Enter an address...'
                        value={endDate}
                        max= {`${y1}-${m}-${d1}`}
                        onChange={(e) => setEndDate(e.target.value)}
                        required
                    />
                    <label>
                    Length of boat ...
                    </label>
                    <input
                        type="integer"
                        placeholder='In nearest number of feet...'
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                        required
                    />

                    <button className="bookSubmit" type="submit">Submit</button>
                </form>

            </div>
        </div>
    );
};

export default MakeBooking;
