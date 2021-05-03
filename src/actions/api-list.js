export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const LANCH_DETAILS_FETCH_START = 'LANCH_DETAILS_FETCH_START';
export const LANCH_DETAILS_FETCH_SUCCESS = 'LANCH_DETAILS_FETCH_SUCCESS';
export const LANCH_DETAILS_FETCH_FAILURE = 'LANCH_DETAILS_FETCH_FAILURE';

export function fetchStart() {
  return {
    type: FETCH_START,
  };
}

export function fetchSuccess(payload) {
  return {
    type: FETCH_SUCCESS,
    payload
  };
}

export function fetchFailure(error) {
  return {
    type: FETCH_FAILURE,
    payload: error
  };
}

export function launchDetailsFetchStart() {
  return {
    type: LANCH_DETAILS_FETCH_START,
  };
}

export function launchDetailsFetchSuccess(payload) {
  return {
    type: LANCH_DETAILS_FETCH_SUCCESS,
    payload
  };
}

export function launchDetailsFetchFailure(error) {
  return {
    type: LANCH_DETAILS_FETCH_FAILURE,
    payload: error
  };
}

export const getData = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    const url = `https://api.spacexdata.com/v3/launches`;
    console.log(url);
    return fetch(url)
      .then(response => response.json())
      .then((apiList) => dispatch(fetchSuccess(apiList)))
      .catch((error) => dispatch(fetchFailure(error)));
  }
}

export const getLaunchDataById = (flightNumber) => {
  return (dispatch) => {
    dispatch(launchDetailsFetchStart());
    const url = `https://api.spacexdata.com/v3/launches/${flightNumber}`;
    console.log(url);
    return fetch(url)
      .then(response => response.json())
      .then((apiList) => dispatch(launchDetailsFetchSuccess(apiList)))
      .catch((error) => dispatch(launchDetailsFetchFailure(error)));
  }
}