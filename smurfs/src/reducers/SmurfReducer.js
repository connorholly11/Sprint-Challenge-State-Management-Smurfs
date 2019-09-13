import {FETCHING_SMURF_START, FETCHING_SMURF_SUCCESS, FETCHING_SMURF_FAILURE} from '../actions/index';

export const initialState = {
    smurfs: [],
    isFetching: false,
    error: ''
}


export const SmurfReducer = (state = initialState, action) => {   
    switch(action.type){
        case FETCHING_SMURF_START: 
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCHING_SMURF_SUCCESS:
            return{
                ...state,
                smurfs: action.payload,
                isFetching: false,
                error: ''
            }
        case FETCHING_SMURF_FAILURE:
            return{
                ...state,
                error: action.payload
            }

        default:
            return state;
    }
}