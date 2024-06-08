import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import * as studentAction from '../../../redux/students/student.actions';
import * as studentReducer from '../../../redux/students/student.reducer';
import Spinner from "../../../layout/misc/spinner/Spinner";

let StudentDetails = () => {
    let dispatch = useDispatch();

    let studentInfo = useSelector((state) => {
        return state[studentReducer.studentFeatureKey];
    });

    let { loading, selectedProfile } = studentInfo;

    let studentId = useParams().studentId;

    useEffect(() => {
        dispatch(studentAction.fetchStudent(studentId));
    }, [studentId]);

    return (
        <React.Fragment>
            {/* {console.log(studentId)} */}
            {
                loading ? <Spinner /> :
                    <React.Fragment>
                        {
                            Object.keys(selectedProfile).length > 0 &&
                            <React.Fragment>
                                <section className="p-3">
                                    <div className="container">
                                        <div className="row animated zoomIn">
                                            <div className="col">
                                                <p className="h3 text-teal">
                                                    <i className="fa fa-user-tie" /> {selectedProfile.user.name}'s Profile </p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi fugiat iusto laudantium rerum. Adipisci animi blanditiis, culpa expedita explicabo, fugiat incidunt labore nostrum omnis, praesentium sit temporibus tenetur velit!</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section>
                                    <div className="container bg-teal text-white text-center p-3">
                                        <div className="row">
                                            <div className="col">
                                                <img src={selectedProfile.user.avatar} alt="" width="200" height="200" className="rounded-circle profile-img" />
                                                <p className="h2">{selectedProfile.user.name}</p>
                                                <p>{selectedProfile.location}</p>
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
                                            <div className="col-md-6">
                                                {
                                                    selectedProfile.experience.length > 0 ?
                                                        <React.Fragment>
                                                            <div className="card">
                                                                <div className="card-body bg-light-grey">
                                                                    <p className="h3">Experience</p>
                                                                    <ul className="list-group">
                                                                        {
                                                                            selectedProfile.experience.map(exp => {
                                                                                return (
                                                                                    <li className="list-group-item my-2" key={exp._id}>
                                                                                        <span>Title : {exp.title}</span><br />
                                                                                        <span>Company : {exp.company}</span><br />
                                                                                        <span>Location : {exp.location}</span><br />
                                                                                        <span>From : {exp.from}</span><br />
                                                                                        <span>To : {exp.to}</span><br />
                                                                                        <span>Description : {exp.description}</span><br />
                                                                                    </li>
                                                                                )
                                                                            })
                                                                        }
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </React.Fragment> : null
                                                }
                                            </div>
                                            <div className="col-md-6">
                                                {
                                                    selectedProfile.experience.length > 0 ?
                                                        <React.Fragment>
                                                            <div className="card">
                                                                <div className="card-body bg-light-grey">
                                                                    <p className="h3">Education</p>
                                                                    <ul className="list-group">
                                                                        {
                                                                            selectedProfile.education.map(edu => {
                                                                                return (
                                                                                    <li className="list-group-item my-2" key={edu._id}>
                                                                                        <span>School : {edu.school}</span><br />
                                                                                        <span>Degree : {edu.degree}</span><br />
                                                                                        <span>Field of Study : {edu.fieldOfStudy}</span><br />
                                                                                        <span>From : {edu.from}</span><br />
                                                                                        <span>To : {edu.to}</span><br />
                                                                                        <span>Description : {edu.description}</span><br />
                                                                                    </li>
                                                                                )
                                                                            })
                                                                        }
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </React.Fragment> : null
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </React.Fragment>
                        }
                    </React.Fragment>
            }
            <div style={{ marginBottom: '150px' }} />
        </React.Fragment>
    )
};
export default StudentDetails;
