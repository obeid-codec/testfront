import React, { Fragment } from 'react'

const AddEducation = () => {
    return (

        <Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-teal">
                                <i className="fa fa-user-clock" />
                                {' '} Add Education
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
                                        <span className="input-group-text bg-light-grey text-teal">School</span>
                                    </div>
                                    <input
                                        required
                                        name="school"
                                        type="text" className="form-control" placeholder="School" />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-light-grey text-teal">Degree</span>
                                    </div>
                                    <input
                                        required
                                        name="degree"
                                        type="text" className="form-control" placeholder="Degree" />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-light-grey text-teal">FieldOfStudy</span>
                                    </div>
                                    <input
                                        required
                                        name="fieldOfStudy"

                                        type="text" className="form-control" placeholder="FieldOfStudy" />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-light-grey text-teal">From Date</span>
                                    </div>
                                    <input
                                        required
                                        name="from"

                                        type="date" className="form-control" />
                                </div>
                                <div className="form-check mb-3">
                                    <input
                                        name="current"

                                        className="form-check-input" type="checkbox" id="defaultCheck1" />
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                        Current
                                    </label>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-light-grey text-teal">To Date</span>
                                    </div>
                                    <input
                                        required
                                        name="to"

                                        type="date" className="form-control"
                                    />
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
                                    <input type="submit" value="add education" className="btn btn-teal btn-sm" />
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

export default AddEducation