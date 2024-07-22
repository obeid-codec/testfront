import React, { Fragment, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import * as userActions from '../../../redux/users/users.actions'
import * as alertActions from '../../../redux/alert/alert.actions'

const UserLogin = () => {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let [user, setUser] = useState({
        email: '',
        password: ''
    });

    let [userError, setUserError] = useState({
        emailError: '',
        passwordError: ''
    });



    let validateEmail = (event) => {
        setUser({ ...user, email: event.target.value });
        let regExp = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
        !regExp.test(event.target.value) ?
            setUserError({ ...userError, emailError: 'Enter a proper Email' })
            : setUserError({ ...userError, emailError: '' });
    }

    let validatePassword = (event) => {
        setUser({ ...user, password: event.target.value });
        let regExp = /^[A-Za-z]\w{7,14}$/;
        !regExp.test(event.target.value) ?
            setUserError({ ...userError, passwordError: 'Enter a proper Password' })
            : setUserError({ ...userError, passwordError: '' });
    }


    let submitLogin = (event) => {
        event.preventDefault();
        if (user.email !== '' && user.password !== '') {
            dispatch(userActions.loginUser(user, navigate));
        }
        else {
            dispatch(alertActions.setAlert('Please fill in  the fields', 'danger'));
        }
    }


    return (
        <Fragment>
            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-6 offset-md-3">
                        <div className="card">
                            <div className="card-header bg-primary text-white">
                                <h4>Login</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={submitLogin}>
                                    <div className="mb-3 form-group">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" className={`form-control ${userError.emailError.length > 0 ? 'is-invalid' : ''}`} id="email" name='email' value={user.email} onChange={validateEmail} placeholder='Email' />
                                        {userError.emailError.length > 0 ? <small className="text-danger">{userError.emailError}</small> : ''}

                                    </div>
                                    <div className="mb-3 form-group">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="password" name='password' value={user.password} onChange={validatePassword} placeholder='Password' />
                                        {userError.passwordError.length > 0 ? <small className="text-danger">{userError.passwordError}</small> : ''}

                                    </div>
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </form>
                                <small>Don't have an account ?
                                    <Link to="/users/register" className="font-weight-bold text-teal"> Register</Link>
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default UserLogin