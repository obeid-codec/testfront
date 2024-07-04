import React, { Fragment, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as studentActions from '../../../redux/students/student.actions';
import * as studentReducer from '../../../redux/students/student.reducer';
import Spinner from "../../../layout/misc/spinner/Spinner";

const StudentList = () => {

    const dispatch = useDispatch();
    const studentInfo = useSelector((state) => state[studentReducer.studentFeatureKey]);

    const { loading, profiles } = studentInfo;

    useEffect(() => {
        dispatch(studentActions.fetchAllStudents());
    }, [dispatch]);

    return (
        <Fragment>
            <section className="p-3 student-list-header">
                <div className="container">
                    <div className="row animated zoomIn">
                        <div className="col text-center">
                            <h3 className="text-teal"><i className="fa fa-user-tie" /> Students</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi fugiat iusto laudantium rerum. Adipisci animi blanditiis, culpa expedita explicabo, fugiat incidunt labore nostrum omnis, praesentium sit temporibus tenetur velit!</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                {JSON.stringify(profiles)}
                {loading ? <Spinner /> : (
                    <Fragment>
                        {profiles.length > 0 ? (
                            <div className="container">
                                <div className="row">
                                    {profiles.map(profile => (
                                        <div className="col-md-6 col-lg-4" key={profile._id}>
                                            <div className="card my-3 animated zoomIn shadow-sm">
                                                <div className="card-body">
                                                    <div className="text-center">
                                                        <img src={profile.user.avatar} className="img-fluid rounded-circle mb-3" alt="" width="100" height="100" />
                                                        <h5>{profile.user.name}</h5>
                                                        <p className="text-muted">{profile.designation}</p>
                                                        <p className="text-muted">{profile.company}</p>
                                                        <p>{profile.location}</p>
                                                        <Link to={`/student/${profile._id}`} className="btn btn-teal btn-sm">View Profile</Link>
                                                        <Link to={`/students/posts/${profile.user._id}`} className="btn btn-teal btn-sm">View Posts</Link>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="container">
                                <div className="row">
                                    <div className="col text-center">
                                        <p>No students found</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Fragment>
                )}
            </section>
        </Fragment>
    );
};

export default StudentList;
