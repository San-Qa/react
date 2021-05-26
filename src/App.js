import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

import CreatePost from './Component/CreateCar';
import PostList from './Component/CarList';
import PostDetails from './Component/CarDetail';
import DeletePost from './Component/Delete';
import EditPost from './Component/EditCar';

const App = () => {
    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <NavLink to="/" className="navbar-brand">CAR SHOWROOM</NavLink>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" activeStyle={{ fontWeight: 'bold' }} to="/" exact>Car</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeStyle={{ fontWeight: 'bold' }} to="/create">New Car</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="container">
                <br />
                <Route path="/" exact component={PostList}></Route>
                <Route path="/create" exact component={CreatePost}></Route>
                <Route path="/details/:id" exact component={PostDetails}></Route>
                <Route path="/delete/:id" exact component={DeletePost}></Route>
                <Route path="/edit/:id" exact component={EditPost}></Route>
            </div>
        </BrowserRouter>
    );
}

export default App;