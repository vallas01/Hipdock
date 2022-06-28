import { csrfFetch } from "./csrf";

const LIST_BOOKINGS = 'booking/listBookings';
const ADD_BOOKING = 'booking/addBooking';
const REMOVE_BOOKING = 'booking/removeBooking';
const UPDATE_BOOKING = 'booking/updateBooking'


const listBookings = list => ({
  type: LIST_BOOKINGS,
  list
});
const addBooking = details => ({
  type: ADD_BOOKING,
  details
})
//eslint-disable-next-line
const removeBooking = id => ({
  type: REMOVE_BOOKING,
  id
});
const editBooking = updatedBooking => ({
  type: UPDATE_BOOKING,
  updatedBooking
});

/*-------- SELECTORS -------*/

export const getBookings = () => async (dispatch) => {
    const response = await csrfFetch(`/api/bookings`);
    if (response.ok) {
        const list = await response.json();
        dispatch(listBookings(list));
    }
    return;
};


export const createBooking = (details) => async dispatch => {
  const response = await csrfFetch('/api/bookings', {
    method: 'POST',
    body: JSON.stringify(details)
  })
  if(response.ok){
    const newBooking = await response.json()
    dispatch(addBooking(newBooking))
    return newBooking;
  }
};

export const updateBookingDetails = (BookingDetails) => async dispatch => {
  const response = await csrfFetch(`/api/bookings/${BookingDetails.id}`, {
    method: 'PUT',
    body: JSON.stringify(BookingDetails)
  })
  if(response.ok){
    const updatedBooking = await response.json()
    dispatch(editBooking(updatedBooking))
    return updatedBooking;
  }
};

export const deleteBooking = (BookingId) => async dispatch => {
  console.log(BookingId)
  const response = await csrfFetch(`/api/bookings/${BookingId}`, {
    method: 'DELETE',
    body: JSON.stringify({BookingId})
  })
  if(response.ok){
      const allBookings = await response.json();
      dispatch(removeBooking(allBookings));
      return 'Booking deleted';
  }
};



/*-------- REDUCER -------*/
const initialState = {};

const bookingReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {

    case LIST_BOOKINGS: {
      newState={...state}
      action.list.forEach(Booking=>newState[Booking.id]=Booking)
      return newState
    }

    case ADD_BOOKING: {
      newState = {...state};
      newState = {...state, [action.details.id]:action.details}
      return newState;
    }

    case UPDATE_BOOKING: {
      newState = {...state};
      newState = {...state, [action.updatedBooking.id]:action.updatedBooking}
      return newState
    }

    case REMOVE_BOOKING: {
      newState = {...state}
      delete newState[action.id]
      return newState
    }

    default:
      return state;

  }

};

export default bookingReducer;
