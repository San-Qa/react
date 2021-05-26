import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Delete = (props) => {
    const { id } = useParams();
    const [post, setPost] = useState();

    useEffect(() => {
        axios.get(`http://localhost:9045/api/user/${id}`).then(result => {
            setPost(result.data);
        })
    }, [id]);

    const handleRemovePost = () => {
        axios.delete(`http://localhost:5000/api/deleteuser/${id}`).then(result => {
            props.history.push("/");
        })
    }

    return (
        <div>
            <h2>want to delete the car <strong>{post?.title}</strong>?</h2>
            <br />
            <div className="btn-group">
                <Link to="/" className="btn btn-primary">
                    <i className="fa fa-arrow-left"></i> Cancel
                </Link>
                <button onClick={handleRemovePost} className="btn btn-danger">
                    Delete <i className="fa fa-trash"></i>
                </button>
            </div>
        </div>
    );
}

export default Delete;