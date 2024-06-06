import React, { Fragment } from 'react'

const userRegister = () => {
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
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input type="text" className="form-control" id="name" name='name' />
                                    </div>
                                    <div className="mb-3 form-group">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="password" name='password' />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Register</button>
                                </form>
                                <small>Already have an account ?
                                    <a href="/login" className="ms-2">Login</a>
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default userRegister