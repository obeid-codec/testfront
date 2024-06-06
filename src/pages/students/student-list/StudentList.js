import React, { Fragment } from 'react'

const StudentList = () => {
    return (
        <Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row animated zoomIn">
                        <div className="col">
                            <p className="h3 text-teal">
                                <i className="fa fa-user-tie" /> Developers</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi fugiat iusto laudantium rerum. Adipisci animi blanditiis, culpa expedita explicabo, fugiat incidunt labore nostrum omnis, praesentium sit temporibus tenetur velit!</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <React.Fragment>
                    <React.Fragment>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="card my-2 animated zoomIn" >
                                        <div className="card-body bg-light-grey">
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <img src="profile.user.avatar" className="img-fluid img-thumbnail" alt="" />
                                                </div>
                                                <div className="col-md-5">
                                                    <h2>profile.user.name</h2>
                                                    <small className="h6">profile.designation</small><br />
                                                    <small className="h6">profile.company</small><br />
                                                    <small>profile.location</small><br />
                                                    <a href="/developers/profile._id"></a>                                                                            </div>
                                                <div className="col-md-5">

                                                    <div >
                                                        <span className="badge badge-success p-2 m-1">
                                                            <i className="fa fa-check-circle" /> skill</span><br />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                </React.Fragment>
            </section>
        </Fragment>
    )
}

export default StudentList