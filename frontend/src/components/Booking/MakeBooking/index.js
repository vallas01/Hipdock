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

    var today = new Date()
    var d1 = today.getDate();
    var d2 = d1 + 1


    const sessionUser= useSelector((state)=>state.session.user)
    const [error, setError]=useState([])
    const [startDate,setStartDate] = useState(`2022-06-${d1}`);
    const [endDate, setEndDate] = useState(`2022-06-${d2}`);
    const [length, setLength] = useState(20);


    const handleSubmit = (e) => {
        e.preventDefault();
        setError([]);

        const checkStart = new Date(startDate)
        const checkEnd = new Date(endDate)

        if(checkStart>checkEnd){
            error.push("Starting date can not come after ending date.");
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
            error.push("Boat length reservation must be between 20 to 65 feet.")
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
            totalCost: costBook.toFixed(2),
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
        setStartDate(`2022-06-${d1}`);
        setEndDate(`2022-06-${d2}`);
        setLength('20');
    }


    return (
        <div className='booking-outer-container'>
            { error.length>0 && (<div className="errors">
                <ul className='bookingErrorList' >
                    {error.map(errorMess => (
                    <li
                        className='bookingErrorListItem'
                        key={error.indexOf(errorMess)}>{errorMess}
                    </li>
                    ))}
                </ul>
            </div>)}
            <div className="booking-form-container">
                <form onSubmit={handleSubmit} className="login-form">

                    <label>
                    Enter your arrival date...
                    </label>
                    <input
                        type="date"
                        placeholder='start date...'
                        value={startDate}
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

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default MakeBooking;
