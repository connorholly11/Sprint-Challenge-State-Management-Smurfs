import axios from 'axios';

const FETCHING_SMURF_START = 'FETCHING_SMURF_START';
const FETCHING_SMURF_SUCCESS = 'FETCHING_SMURF_SUCCESS';
const FETCHING_SMURF_FAILURE = 'FETCHING_SMURF_FAILURE';

export const getSmurf = () => dispatch => {
    dispatch({FETCHING_SMURF_START})

}