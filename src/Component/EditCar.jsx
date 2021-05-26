import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const EditPost = (props) => {
    const { id } = useParams();
    const { register, handleSubmit, errors, setValue } = useForm();

    useEffect(() => {
        axios.get(`http://localhost:9045/api/user/${id}`).then(result => {
            setValue("id", result.data.id);
            setValue("name", result.data.name);
            setValue("model", result.data.model);
        })
    }, [id]);

    const onSubmit = data => {
        axios.put(`http://localhost:9045/api/updateuser/${id}`, data).then(result => {
            props.history.push("/");
        })
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Update Car</h5>
                <div className="card-text">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label>ID</label>
                            <input type="text" readOnly className="form-control" name="id" ref={register({ required: true })} />
                        </div>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" name="name" ref={register({ required: true })} />
                            <small className="form-text text-danger">{errors.name && 'invalid name'}</small>
                        </div>
                        <div className="form-group">
                            <label>Model</label>
                            <input type="text" className="form-control" name="model" ref={register({ required: true })} />
                            <small className="form-text text-danger">{errors.model && 'invalid model'}</small>
                        </div>

                        <Link to="/" className="btn btn-primary">
                            <i className="fa fa-arrow-left"></i> Cancel
                        </Link>
                        &nbsp;
                        <button type="submit" className="btn btn-primary">Save <i className="fa fa-save"></i></button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditPost;