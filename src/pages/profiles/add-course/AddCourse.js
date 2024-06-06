import React, { Fragment } from 'react'

const AddCourse = () => {
    return (
        <Fragment>
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
                            <form >
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-light-grey text-teal">Course</span>
                                    </div>
                                    <input
                                        required
                                        name="course"
                                        type="text" className="form-control" placeholder="Course" />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-light-grey text-teal">Semester</span>
                                    </div>
                                    <input
                                        required
                                        name="semester"
                                        type="text" className="form-control" placeholder="Semester" />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-light-grey text-teal">Description</span>
                                    </div>
                                    <textarea
                                        required
                                        name="description"

                                        rows="3" className="form-control" placeholder="Description" />
                                </div>
                                <div>
                                    <input type="submit" value="add Course" className="btn btn-teal btn-sm" />
                                    <a to="/profiles/dashboard" className="btn bg-light-grey btn-sm">Back</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default AddCourse