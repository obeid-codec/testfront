import React, { Fragment } from 'react'

const StudentDetails = () => {
    return (

        <Fragment>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className='h3 text-teal'>
                                <i className='fa fa-user-tie' /> Ramy's Profile
                            </p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum saepe omnis quam pariatur fugiat totam repellat magni, rerum dolore cum est dolores accusantium corrupti mollitia perferendis repellendus sapiente doloribus a?</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="contaienr bg-teal text-white text-center p-3">
                    <div className="row">
                        <div className="col">
                            <img src="" alt="" width="200" height="200" className='rounded-circle profile-img' />
                            <p className='h2' >username</p>
                            <p className='h6' >designation</p>
                            <p className='h6' >companey</p>
                            <p>location</p>
                            <div className="d-flex flex-row justify-content-center">
                                <div className="p-2">
                                    <i className="fab fa-facebook" />
                                </div>
                                <div className="p-2">
                                    <i className="fab fa-twitter" />
                                </div>
                                <div className="p-2">
                                    <i className="fab fa-linkedin" />
                                </div>
                                <div className="p-2">
                                    <i className="fab fa-youtube" />
                                </div>
                                <div className="p-2">
                                    <i className="fab fa-instagram" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <div className="card my-2">
                                <div className="card-body bg-light-grey text-teal">
                                    <p className="h3">Ramy's Biography</p>
                                    <p>selectedProfile.bio</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <div className="card my-2">
                                <div className="card-body bg-light-grey text-teal">
                                    <p className="h3">selectedProfile.user.name's Skills</p>
                                    <span className="badge badge-dark p-2 m-2">skill1</span>
                                    <span className="badge badge-dark p-2 m-2">skill2</span>
                                    <span className="badge badge-dark p-2 m-2">skill3</span>
                                    <span className="badge badge-dark p-2 m-2">skill4</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">

                            <React.Fragment>
                                <div className="card">
                                    <div className="card-body bg-light-grey">
                                        <p className="h3">Experience</p>
                                        <ul className="list-group">
                                            <li className="list-group-item my-2" >
                                                <span>Title : exp.title</span><br />
                                                <span>Company : exp.company</span><br />
                                                <span>Location : exp.location</span><br />
                                                <span>From : exp.from</span><br />
                                                <span>To : exp.to</span><br />
                                                <span>Description : exp.description</span><br />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </React.Fragment>

                        </div>
                        <div className="col-md-6">
                            <React.Fragment>
                                <div className="card">
                                    <div className="card-body bg-light-grey">
                                        <p className="h3">Education</p>
                                        <ul className="list-group">
                                            <li className="list-group-item my-2" >
                                                <span>School : edu.school</span><br />
                                                <span>Degree : edu.degree</span><br />
                                                <span>Field of Study : edu.fieldOfStudy</span><br />
                                                <span>From : edu.from</span><br />
                                                <span>To : edu.to</span><br />
                                                <span>Description : edu.description</span><br />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </React.Fragment>
                        </div>
                    </div>
                </div>
            </section>

        </Fragment>
    )
}

export default StudentDetails