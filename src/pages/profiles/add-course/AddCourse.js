import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as profileActions from "../../../redux/profiles/profile.actions";

let AddCourse = () => {
    let dispatch = useDispatch();
    let navigate = useNavigate();

    let [courses, setCourses] = useState({
        course: '',
        semester: '',
        description: ''
    });

    let updateInput = (e) => {
        if (e.target.type === 'checkbox') {
            setCourses({
                ...courses,
                [e.target.name]: e.target.checked
            });
        }
        else {
            setCourses({
                ...courses,
                [e.target.name]: e.target.value
            });
        }
    };

    let submitAddCourses = (e) => {
        e.preventDefault();
        dispatch(profileActions.addCourse(courses, navigate));
    };

    return (
        <React.Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-teal">
                                <i className="fa fa-user-clock" />
                                {' '} Add Course
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque dignissimos distinctio dolor error expedita id incidunt, iusto laborum, molestiae mollitia optio placeat quod recusandae soluta unde, vel! Deserunt, quisquam!</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <form onSubmit={submitAddCourses}>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-light-grey text-teal">Course</span>
                                    </div>
                                    <input
                                        required
                                        name="course"
                                        value={courses.course}
                                        onChange={updateInput}
                                        type="text" className="form-control" placeholder="Course" />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-light-grey text-teal">Semester</span>
                                    </div>
                                    <input
                                        required
                                        name="semester"
                                        value={courses.semester}
                                        onChange={updateInput}
                                        type="text" className="form-control" placeholder="semester" />
                                </div>

                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-light-grey text-teal">Description</span>
                                    </div>
                                    <textarea
                                        required
                                        name="description"
                                        value={courses.description}
                                        onChange={updateInput}
                                        rows="3" className="form-control" placeholder="Description" />
                                </div>
                                <div>
                                    <input type="submit" value="add education" className="btn btn-teal btn-sm" />
                                    <Link to="/profiles/dashboard" className="btn bg-light-grey btn-sm">Back</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};
export default AddCourse;
