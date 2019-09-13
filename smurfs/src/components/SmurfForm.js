import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Form, Field, withFormik} from 'formik'
import * as Yup from 'yup';


const SmurfForm = ({errors, touched, values, status}) => {

    const [smurfs, setSmurfs] = useState([])

    useEffect(() => {
        if (status){
            setSmurfs([...smurfs, status])
        }
    }, [status])

    return(
        <div>
            <h1>I'M SmurfForm</h1>
            <Form>
                <Field type="text" name="name" placeholder="name">
                    {
                        touched.name && errors.name &&(
                            <p>{errors.name}</p>
                        )
                    }
                </Field>
                <Field type="text" name="age" placeholder="age">
                    {
                        touched.age && errors.age &&(
                            <p>{errors.age}</p>
                        )
                    }
                </Field>
                <button type="submit">Submit!</button>

            </Form>

            {smurfs.map(info => (
                <ul key={info.id}>
                    <li>Name: {info.name} </li>
                    <li>Age: {info.age}</li>
                </ul>
            ))}
        </div>
    )
}

const FormikForm = withFormik({
    mapPropsToValues({name, age}) {
        return{
            name: name || "",
            age: age || "",
        }
    },
validationSchema: Yup.object().shape({
    name: Yup.string().required("Name is required"),
    // email: Yup.string().required("Email is required"),
    // terms: Yup.boolean(true).required("You must agree to Terms and Services")
}),

handleSubmit(values, {setStatus}) {
    axios.post('http://localhost:3333/smurfs', values)
    .then(response =>{
        setStatus(response.data);
        console.log(response.data);
        console.log(setStatus);
    })
}

})(SmurfForm);

export default FormikForm