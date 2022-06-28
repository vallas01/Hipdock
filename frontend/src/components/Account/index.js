import './Account.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { deleteDock, getDocks } from '../../store/dock';
import { deleteBooking, getBookings } from '../../store/book'
import { Link } from 'react-router-dom';

const Account = () => {
    const dispatch = useDispatch();
    const userId = useSelector(state=>state.session.user.id);
    const userName = useSelector(state=>state.session.user.username);
    const docks = useSelector(state=> state.dock)
    const bookings = useSelector(state=> state.booking)


    const deleteThisDock = (id) => {
        dispatch(deleteDock(id))
    }

    const deleteThisBooking = (id) => {
        dispatch(deleteBooking(id))
    }

    useEffect(() => {
        dispatch(getDocks())
    }, [dispatch]);

    useEffect(() => {
        dispatch(getBookings())
    }, [dispatch])

    let foundHost = false;
    let foundBook = false;

    const formatDate = (date) =>{
        let dd = date.split("T").slice(0,1);
        // let y = date.slice(0,4);
        // let m = date.slice(6,8);
        return dd;
    }
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
                                            <div className='image-container'>
                                                <img className='account-imgDock' src={dock.imagePath} alt='dock' />
                                            </div>
                                            <div className='dockName'>{dock.name}</div>
                                            <div className='dockDescription'>{dock.description}</div>
                                            <div className='dockCityState'>{dock.city}, {dock.state}<span className="dot"></span>${dock.cost}&nbsp;/ foot</div>
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


            <div className='account-ul'>
                    <ul id='dockList'>
                        {Object.values(bookings).map((book)=>{
                            if (book.user_id === userId) {
                                foundBook = true;
                            }
                            return(
                                book.user_id === userId && (
                                    <li className='dockList' key={book.id} >
                                            <div className='image-container'>
                                                <img className='account-imgDock' src={book.Dock?.imagePath} alt='dock' />
                                            </div>
                                            <div className='book-dockName'>{book.Dock?.name}</div>
                                            <div className='bookDate'>Arrival Date:  {formatDate(book?.startDate)}</div>
                                            <div className='bookDate'>Departure Date:  {formatDate(book?.endDate)}</div>
                                            <div className='bookFee'>Total Booking Fee: ${Math.ceil(book?.totalCost)}</div>
                                            <button className='accountDeleteBtn red-hover' onClick={()=>deleteThisBooking(book.id)}>Delete</button>
                                    </li>)



                            )
                        })}

                    </ul>
                </div>



            <div className='account-dockList'>

            {!foundBook && (
                <div className='notHosting' >
                    <div >NO BOOKINGS YET!</div>
                    <i className="fa-regular fa-face-frown fa-2xl"></i>
                </div>
            )}

            </div>



        </div>
    )
}

export default Account
