import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    return (
        <Fragment>
            <Fragment>

                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <p className="h3 text-teal">
                                    <i className="fa fa-sitemap" />
                                    Dashboard
                                </p>


                                <p className="h5">Welcome user.name</p>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
            <Fragment>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Link to="/profiles/edit-profile" className="btn btn-light text-teal btn-sm">
                                    <i className="fa fa-user-cog" /> Edit Profile</Link>
                                <Link to="/profiles/add-experience" className="btn btn-light text-teal btn-sm">
                                    <i className="fa fa-user-tie" /> Add Experience</Link>
                                <Link to="/profiles/add-education" className="btn btn-light text-teal btn-sm">
                                    <i className="fa fa-graduation-cap" /> Add Education</Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Experience Details */}
                <section>

                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <p className="h3 text-teal">Experience Details</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <table className="table table-hover text-center table-light table-striped">
                                    <thead className="bg-teal text-white">
                                        <tr>
                                            <th>Title</th>
                                            <th>Company</th>
                                            <th>Location</th>
                                            <th>From</th>
                                            <th>To</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr >
                                            <td>exp.title</td>
                                            <td>exp.company</td>
                                            <td>exp.location</td>
                                            <td>exp.from</td>
                                            <td>exp.to</td>
                                            <td>
                                                <button className="btn btn-danger btn-sm">Delete</button>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </section>
                {/* Education Details */}
                <section>

                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <p className="h3 text-teal">Education Details</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <table className="table table-hover text-center table-light table-striped">
                                    <thead className="bg-teal text-white">
                                        <tr>
                                            <th>School</th>
                                            <th>Degree</th>
                                            <th>Field Of Study</th>
                                            <th>From</th>
                                            <th>To</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr >
                                            <td>edu.school</td>
                                            <td>edu.degree</td>
                                            <td>edu.fieldOfStudy</td>
                                            <td>edu.from</td>
                                            <td>edu.to</td>
                                            <td>
                                                <button className="btn btn-danger btn-sm">Delete</button>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment> :
            <Fragment>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <small>You don't have a profile yet! , please create one.</small><br />
                                <Link to="/profiles/create-profile" className="btn btn-light text-teal btn-sm">
                                    <i className="fa fa-user-cog" /> Create Profile</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        </Fragment>
    )
}

export default Dashboard