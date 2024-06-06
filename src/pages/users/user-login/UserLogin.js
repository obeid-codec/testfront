import React, { Fragment } from 'react'

const UserLogin = () => {
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
                                <form>
                                    <div className="mb-3 form-group">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="email" name='email' />
                                    </div>
                                    <div className="mb-3 form-group">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="password" name='password' />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </form>
                                <small>Don't have an account ?
                                    <a href="/register" className="ms-2">Register</a>
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