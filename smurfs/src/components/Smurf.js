import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getSmurf} from '../actions/index';

const Smurf = ({getSmurf, smurfs, isFetching, error}) => {

    useEffect(() => {

        getSmurf()
    }, getSmurf)

    if (isFetching){
        return <h1>FETCHING API DATA</h1>
    }

    return(
        <div>
            {smurfs.map(smurf => {
                return (
                <div>
                    <h1>Name: {smurf.name}</h1> 
                    <p>Age: {smurf.age}</p>
                    <p>Height: {smurf.height}</p>
                </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return{
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, 
    {getSmurf}
    )(Smurf);


