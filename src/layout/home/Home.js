import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as userReducer from '../../redux/users/users.reducer';

const Home = () => {
    const userInfo = useSelector((state) => state[userReducer.usersFeatureKey]);
    const { isAuthenticated } = userInfo;

    return (
        <Fragment>
            <div className="landing-page">
                <div className="wrapper">
                    <div className="d-flex flex-column justify-content-center align-items-center text-center h-100">
                        <h5 className="display-4 animated zoomIn">Uni Connect</h5>
                        <p className="animated zoomIn">Connecting Together .. Make it Easy !!</p>
                        <div className="animated jello">
                            {
                                !isAuthenticated && (
                                    <>
                                        <Link to="/users/register" className="btn btn-light btn-sm text-teal">Register</Link>
                                        <Link to="/users/login" className="btn btn-teal btn-sm">Login</Link>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Home;
