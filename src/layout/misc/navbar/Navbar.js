import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as userReducer from '../../../redux/users/users.reducer'
import * as userActions from '../../../redux/users/users.actions';
import { useDispatch, useSelector } from "react-redux";

let Navbar = () => {
    let dispatch = useDispatch();
    let navigate = useNavigate();

    let userInfo = useSelector((state) => {
        return state[userReducer.usersFeatureKey];
    });

    let { user, isAuthenticated } = userInfo;

    // let clickLogOut = () => {
    //     dispatch(userActions.logoutUser(navigate));
    // };

    let beforeLogin = <React.Fragment>
        <li className="nav-item">
            <Link to="/users/register" className="nav-link">
                Register</Link>
        </li>
        <li className="nav-item">
            <Link to="/users/login" className="nav-link">
                Login</Link>
        </li>
    </React.Fragment>

    let afterLogin = <React.Fragment>
        {
            Object.keys(user).length > 0 &&
            <React.Fragment>
                <li className="nav-item">
                    <Link to="/posts/list" className="nav-link">
                        <i className="fa fa-list" /> Posts</Link>
                </li>
                <li className="nav-item">
                    <Link to="/profiles/dashboard" className="nav-link">
                        <i className="fa fa-sitemap" /> Dashboard</Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link">
                        <img src={user.avatar} alt="" width="25" height="25" className="rounded-circle" />
                    </Link>
                </li>
            </React.Fragment>
        }
        {/* <li className="nav-item">
            <Link to="/" className="nav-link" onClick={clickLogOut}>
                LogOut</Link>
        </li> */}
    </React.Fragment>

    return (
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <i className="fa fa-code" /> UniConnect</Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/students" className="nav-link">
                                    <i className="fa fa-user-tie" /> Students</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            {
                                isAuthenticated ? afterLogin : beforeLogin
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
};
export default Navbar;
