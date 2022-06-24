import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { createBooking } from '../../../store/book';
import './MakeBooking.css'

const MakeBooking = ()=>{
    const dispatch = useDispatch();
    const history = useHistory()
    const sessionUser= useSelector((state)=>state.session.user)
    const { dockId } = useParams();
    const [errorMessages, setErrorMessages]=useState([])
    const [startDate,setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    //eslint-disable-next-line
    const [totalCost, setTotalCost] = useState(100)


    useEffect(() => {
        const errors = []

        const d = new Date();
        let text = d.toString();
        // const today = new Date();
        // const checkStart = new Date(startDate);
        console.log(`today's date from Date(): ${text}`)
        // console.log(`startDate from input: ${startDate}`)
        // console.log(`checkStart from input: ${checkStart}`)
        // if(checkStart<today){
        //     errors.push("Starting date can not be in the past. ");
        //     reset();
        // }

        if(startDate>endDate){
            errors.push("Starting date can not come after ending date. ");
            reset();
        }

        setErrorMessages(errors)
    }, [startDate, endDate])



    const handleSubmit = (e) => {
        e.preventDefault();
        // setErrors([]);
        const user_id = sessionUser.id
        const dock_id = dockId
        const newBooking = {
            user_id,
            dock_id,
            startDate,
            endDate,
            totalCost,
        };

        console.log(`userId.....${user_id}`)
        console.log(`dockId.....${dock_id}`)

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
        setStartDate('');
        setEndDate('');
    }


    return (
        <div className='booking-outer-container'>
            { errorMessages.length>0 && (<div className="errors">
                <ul>
                    {errorMessages.map(error => (
                    <li>{error}</li>
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
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default MakeBooking;
