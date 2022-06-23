import { csrfFetch } from "./csrf";

const LIST_DOCKS = 'dock/listDocks';
const ADD_DOCK = 'dock/addDock';
const REMOVE_DOCK = 'dock/removeDock';
const UPDATE_DOCK = 'dock/updateDock'


const listDocks = list => ({
  type: LIST_DOCKS,
  list
});
const addDock = details => ({
  type: ADD_DOCK,
  details
})
//eslint-disable-next-line
const removeDock = id => ({
  type: REMOVE_DOCK,
  id
});
const editDock = updatedDock => ({
  type: UPDATE_DOCK,
  updatedDock
});

/*-------- SELECTORS -------*/

export const getDocks = () => async (dispatch) => {
    const response = await csrfFetch(`/api/docks`);
    if (response.ok) {
        const list = await response.json();
        dispatch(listDocks(list));
    }
    return;
};


export const createDock = (details) => async dispatch => {
  const response = await csrfFetch('/api/docks', {
    method: 'POST',
    body: JSON.stringify(details)
  })
  if(response.ok){
    const newDock = await response.json()
    dispatch(addDock(newDock))
    return newDock;
  }
};

export const updateDockDetails = (dockDetails) => async dispatch => {
  const response = await csrfFetch(`/api/docks/${dockDetails.id}`, {
    method: 'PUT',
    body: JSON.stringify(dockDetails)
  })
  if(response.ok){
    const updatedDock = await response.json()
    dispatch(editDock(updatedDock))
    return updatedDock;
  }
};

export const deleteDock = (dockId) => async dispatch => {
  console.log(dockId)
  const response = await csrfFetch(`/api/docks/${dockId}`, {
    method: 'DELETE',
    body: JSON.stringify({dockId})
  })
  if(response.ok){
      const allDocks = await response.json();
      dispatch(removeDock(allDocks));
      return 'dock deleted';
  }
};



/*-------- REDUCER -------*/
const initialState = {};

const dockReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {

    case LIST_DOCKS: {
      newState={...state}
      action.list.forEach(dock=>newState[dock.id]=dock)
      return newState
    }

    case ADD_DOCK: {
      newState = {...state};
      newState = {...state, [action.details.id]:action.details}
      return newState;
    }

    case UPDATE_DOCK: {
      newState = {...state};
      newState = {...state, [action.updatedDock.id]:action.updatedDock}
      return newState
    }

    case REMOVE_DOCK: {
      console.log("REDUCER IS HERE", action.id)
      newState = {...state}
      delete newState[action.id]
      return newState
    }

    default:
      return state;

  }

};

export default dockReducer;
