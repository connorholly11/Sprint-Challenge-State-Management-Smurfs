import axios from 'axios';

export const FETCHING_SMURF_START = 'FETCHING_SMURF_START';
export const FETCHING_SMURF_SUCCESS = 'FETCHING_SMURF_SUCCESS';
export const FETCHING_SMURF_FAILURE = 'FETCHING_SMURF_FAILURE';

export const getSmurf = () => dispatch => {
    dispatch({type: FETCHING_SMURF_START})

    axios.get('http://localhost:3333/smurfs')
        .then(response => {
            console.log('smurf data', response.data)
            dispatch({type: FETCHING_SMURF_SUCCESS, payload:response.data})
        })
        .catch(error => {
            dispatch({type: FETCHING_SMURF_FAILURE, payload: `${error.response}`})
        })
}