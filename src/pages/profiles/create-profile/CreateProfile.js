import React, { Fragment } from 'react'

const CreateProfile = () => {
    return (
        <Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-teal">
                                <i className="fa fa-user-circle" />
                                {' '} Create a Profile
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
                                <div className="form-group">
                                    <input
                                        required
                                        name="company"

                                        type="text" className="form-control" placeholder="Company" />
                                </div>
                                <div className="form-group">
                                    <input
                                        required
                                        name="website"

                                        type="text" className="form-control" placeholder="Website" />
                                </div>
                                <div className="form-group">
                                    <input
                                        required
                                        name="location"

                                        type="text" className="form-control" placeholder="Location" />
                                </div>
                                <div className="form-group">
                                    <select
                                        required
                                        name="designation"

                                        className="form-control">
                                        <option value="">Select Designation</option>
                                        <option value="Junior Developer">Junior Developer</option>
                                        <option value="Senior Developer">Senior Developer</option>
                                        <option value="Tech Lead">Tech Lead</option>
                                        <option value="Junior Manager">Junior Manager</option>
                                        <option value="Senior Manager">Senior Manager</option>
                                        <option value="Director">Director</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input
                                        required
                                        name="skills"

                                        type="text" className="form-control" placeholder="Skills" />
                                </div>
                                <div className="form-group">
                                    <textarea
                                        required
                                        name="bio"
                                        rows="3" className="form-control" placeholder="Job Description" />
                                </div>
                                <div className="form-group">
                                    <input
                                        required
                                        name="githubUserName"

                                        type="text" className="form-control" placeholder="Github UserName" />
                                </div>
                                <hr />
                                <small>Social Links</small>
                                <div className="form-group">
                                    <input
                                        required
                                        name="youtube"

                                        type="text" className="form-control" placeholder="YouTube" />
                                </div>
                                <div className="form-group">
                                    <input
                                        required
                                        name="twitter"

                                        type="text" className="form-control" placeholder="Twitter" />
                                </div>
                                <div className="form-group">
                                    <input
                                        required
                                        name="facebook"

                                        type="text" className="form-control" placeholder="Facebook" />
                                </div>
                                <div className="form-group">
                                    <input
                                        required
                                        name="linkedin"

                                        type="text" className="form-control" placeholder="LinkedIn" />
                                </div>
                                <div className="form-group">
                                    <input
                                        required
                                        name="instagram"

                                        type="text" className="form-control" placeholder="Instagram" />
                                </div>
                                <div>
                                    <input type="submit" className="btn btn-teal btn-sm" value="Create Profile" />
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

export default CreateProfile