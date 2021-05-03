import { LANCH_DETAILS_FETCH_START, LANCH_DETAILS_FETCH_SUCCESS,
  LANCH_DETAILS_FETCH_FAILURE } from '../actions/api-list';

export default function (state = { apiList: [], launchDetails: null, error: {}, isLoading: false, isLaunchDetailsLoading: false }, action) {
    switch (action.type) {
      case "FETCH_START":
        return { apiList: [], error: {}, isLoading: true };
      case "FETCH_SUCCESS":
        return { apiList: action.payload, error: {}, isLoading: false };
      case "FETCH_FAILURE":
        return { ...state, error: action.payload, isLoading: false };
      case LANCH_DETAILS_FETCH_START:
        return { ...state, launchDetails: null, error: {}, isLaunchDetailsLoading: true };
      case LANCH_DETAILS_FETCH_SUCCESS:
          return { ...state, launchDetails: action.payload, error: {}, isLaunchDetailsLoading: false };
      case LANCH_DETAILS_FETCH_FAILURE:
          return { ...state, launchDetails: null, isLaunchDetailsLoading: false, error: action.payload };
      default:
        return state;
    }
  };
  