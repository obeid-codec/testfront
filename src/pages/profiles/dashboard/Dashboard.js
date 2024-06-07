import React, { useEffect } from 'react';
import * as userReducer from '../../../redux/users/users.reducer';
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../../layout/misc/spinner/Spinner";
import * as profileActions from '../../../redux/profiles/profile.actions';
import * as profileReducer from '../../../redux/profiles/profile.reducer';
import { Link } from "react-router-dom";

let Dashboard = () => {
    let dispatch = useDispatch();

    let userInfo = useSelector((state) => {
        return state[userReducer.usersFeatureKey];
    });

    let profileInfo = useSelector((state) => {
        return state[profileReducer.profileFeatureKey];
    });

    let { profile, loading } = profileInfo;

    useEffect(() => {
        dispatch(profileActions.getProfile());
    }, []);

    let { user } = userInfo;

    let clickDeleteExperience = (experienceId) => {
        dispatch(profileActions.deleteExperience(experienceId));
    };

    let clickDeleteEducation = (educationId) => {
        dispatch(profileActions.deleteEducation(educationId));
    };

    let clickDeleteCourse = (courseId) => {
        dispatch(profileActions.deleteCourse(courseId));
    };
    return (
        <React.Fragment>
            {
                loading ? <Spinner /> :
                    <React.Fragment>
                        <section className="p-3">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <p className="h3 text-teal">
                                            <i className="fa fa-sitemap" />
                                            Dashboard
                                        </p>
                                        {
                                            Object.keys(user).length > 0 &&
                                            <p className="h5">Welcome {user.name}</p>
                                        }
                                    </div>
                                </div>
                            </div>
                        </section>
                    </React.Fragment>
            }
            {
                Object.keys(profile).length > 0 ?
                    <React.Fragment>
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
                                        <Link to="/profiles/add-course" className="btn btn-light text-teal btn-sm">
                                            <i className="fa fa-graduation-cap" /> Add Course</Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* Experience Details */}
                        <section>
                            {
                                profile.experience.length > 0 &&
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
                                                    {
                                                        profile.experience.map(exp => {
                                                            return (
                                                                <tr key={exp._id}>
                                                                    <td>{exp.title}</td>
                                                                    <td>{exp.company}</td>
                                                                    <td>{exp.location}</td>
                                                                    <td>{exp.from}</td>
                                                                    <td>{exp.to}</td>
                                                                    <td>
                                                                        <button onClick={clickDeleteExperience.bind(this, exp._id)} className="btn btn-danger btn-sm">Delete</button>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            }
                        </section>
                        {/* Education Details */}
                        <section>
                            {
                                profile.education.length > 0 &&
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
                                                    {
                                                        profile.education.map(edu => {
                                                            return (
                                                                <tr key={edu._id}>
                                                                    <td>{edu.school}</td>
                                                                    <td>{edu.degree}</td>
                                                                    <td>{edu.fieldOfStudy}</td>
                                                                    <td>{edu.from}</td>
                                                                    <td>{edu.to}</td>
                                                                    <td>
                                                                        <button onClick={clickDeleteEducation.bind(this, edu._id)} className="btn btn-danger btn-sm">Delete</button>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            }
                        </section>
                        {/* Course Details */}
                        <section>
                            {
                                profile.course.length > 0 &&
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <p className="h3 text-teal">Course Details</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <table className="table table-hover text-center table-light table-striped">
                                                <thead className="bg-teal text-white">
                                                    <tr>
                                                        <th>Course</th>
                                                        <th>Semester</th>
                                                        <th>Description</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        profile.course.map(crs => {
                                                            return (
                                                                <tr key={crs._id}>
                                                                    <td>{crs.course}</td>
                                                                    <td>{crs.semester}</td>
                                                                    <td>{crs.description}</td>
                                                                    <td>
                                                                        <button onClick={clickDeleteCourse.bind(this, crs._id)} className="btn btn-danger btn-sm">Delete</button>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            }
                        </section>
                    </React.Fragment> :
                    <React.Fragment>
                        <section>
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <small>You don't have a profile yet! , please create one.</small><br />
                                        <Link to="/profiles/create" className="btn btn-light text-teal btn-sm">
                                            <i className="fa fa-user-cog" /> Create Profile</Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </React.Fragment>
            }
        </React.Fragment>
    )
};
export default Dashboard;
