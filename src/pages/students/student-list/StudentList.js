import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as studentActions from '../../../redux/students/student.actions';
import * as studentReducer from '../../../redux/students/student.reducer';
import Spinner from "../../../layout/misc/spinner/Spinner";
import './StudentList.css';  // Assuming you have a separate CSS file for styling

const StudentList = () => {

    const dispatch = useDispatch();
    const studentInfo = useSelector((state) => state[studentReducer.studentFeatureKey]);

    const { loading, profiles } = studentInfo;

    useEffect(() => {
        dispatch(studentActions.fetchAllStudents());
    }, [dispatch]);

    return (
        <div className="student-list">
            <section className="student-list-header">
                <div className="container text-center">
                    <h3 className="text-teal"><i className="fa fa-user-tie" /> Students</h3>
                    <p className="description">
                        Explore the profiles of all our students. Click to view detailed information and their related posts.
                    </p>
                </div>
            </section>
            <section>
                {loading ? (
                    <Spinner />
                ) : (
                    profiles.length > 0 ? (
                        <div className="container">
                            <div className="row">
                                {profiles.map(profile => (
                                    <div className="col-md-6 col-lg-4" key={profile._id}>
                                        <div className="card profile-card shadow-sm">
                                            <div className="card-body text-center">
                                                <img src={profile.user.avatar} className="profile-avatar mb-3" alt={profile.user.name} />
                                                <h5>{profile.user.name}</h5>
                                                <p className="text-muted">{profile.designation}</p>
                                                <p className="text-muted">{profile.company}</p>
                                                <p>{profile.location}</p>
                                                <div className="profile-actions">
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
                    )
                )}
            </section>
        </div>
    );
};

export default StudentList;
