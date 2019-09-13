import React from 'react'

const formSubmit = props => {
    return(
        <div>
            {props.smurfs.map(smurf => {
                return(
                    <div>
                        <h1>{smurf.name}</h1>
                        <p>{smurf.age}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default formSubmit;