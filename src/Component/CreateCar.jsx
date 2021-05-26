import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const CreateCar = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:9045/api/users', data).then(result => {
            props.history.push("/");
        })
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Add Car</h5>
                <div className="card-text">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" name="name" ref={register({ required: true })} />
                            <small className="form-text text-danger">{errors.name && 'Invalid car'}</small>
                        </div>
                        <div className="form-group">
                            <label>Model</label>
                            <input type="text" className="form-control" name="model" ref={register({ required: true })} />
                            <small className="form-text text-danger">{errors.model && 'Invalid model'}</small>
                        </div>
                        <button type="submit" className="btn btn-primary">Save</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateCar;