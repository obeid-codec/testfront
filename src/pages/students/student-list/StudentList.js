import React, { Fragment, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as studentActions from '../../../redux/students/student.actions';
import * as studentReducer from '../../../redux/students/student.reducer';
import Spinner from "../../../layout/misc/spinner/Spinner";

const StudentList = () => {

    let dispatch = useDispatch();
    let studentInfo = useSelector((state) => {
        return state[studentReducer.studentFeatureKey]
    })

    let { loading, profiles } = studentInfo


    useEffect(() => {
        dispatch(studentActions.fetchAllStudents())
    }, [dispatch])

    return (
        <Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row animated zoomIn">
                        <div className="col">
                            <p className="h3 text-teal">
                                <i className="fa fa-user-tie" /> Students</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi fugiat iusto laudantium rerum. Adipisci animi blanditiis, culpa expedita explicabo, fugiat incidunt labore nostrum omnis, praesentium sit temporibus tenetur velit!</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                {
                    loading ? <Spinner /> :
                        <React.Fragment>
                            {
                                profiles.length > 0 ?
                                    <React.Fragment>
                                        <div className="container">
                                            <div className="row">
                                                <div className="col">
                                                    {
                                                        profiles.map(profile => {
                                                            return (
                                                                <div className="card my-2 animated zoomIn" key={profile._id}>
                                                                    <div className="card-body bg-light-grey">
                                                                        <div className="row">
                                                                            <div className="col-md-2">
                                                                                <img src={profile.user.avatar} className="img-fluid img-thumbnail" alt="" />
                                                                            </div>
                                                                            <div className="col-md-5">
                                                                                <h2>{profile.user.name}</h2>
                                                                                <small className="h6">{profile.designation}</small><br />
                                                                                <small className="h6">{profile.company}</small><br />
                                                                                <small>{profile.location}</small><br />
                                                                                <Link to={`/student/${profile._id}`} className="btn btn-teal btn-sm">View Profile</Link>
                                                                            </div>
                                                                            <div className="col-md-5">

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </React.Fragment> : null
                            }
                        </React.Fragment>
                }
            </section>
        </Fragment>
    )
}

export default StudentList