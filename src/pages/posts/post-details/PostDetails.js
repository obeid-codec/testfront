import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const PostDetails = () => {
    return (
        <Fragment>
            <React.Fragment>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Link to="/posts/list" className="btn bg-light-grey btn-sm">back</Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">

                                <div className="card">
                                    <div className="card-body bg-light-grey">
                                        <div className="row">
                                            <div className="col-md-2 text-center">
                                                <img src="" alt="" className="rounded-circle" width="60" height="60" /><br />
                                                <small>selectedPost.name</small>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <img src="selectedPost.image" alt="" className="img-fluid d-block m-auto" />
                                                    </div>
                                                </div>
                                                <p>selectedPost.text</p>
                                                <small>selectedPost.createdAt</small>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col">
                                                <form >
                                                    <div className="input-group mb-1">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text" id="basic-addon1">
                                                                <img src="" alt="" width="50" height="50" className="rounded-circle" />
                                                            </span>
                                                        </div>
                                                        <textarea
                                                            required
                                                            name="text"
                                                            rows="3" className="form-control" placeholder="Whats on your mind.." />
                                                    </div>
                                                    <div>
                                                        <input type="submit" className="btn btn-teal btn-sm" value="Comment" />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <section>

                    <div className="container">
                        <div className="row">
                            <div className="col">

                                <div className="card mt-3">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-2">
                                                <img src="" alt="" className="rounded-circle" width="50" height="50" />
                                                <br />
                                                <small>comment.name</small>
                                            </div>
                                            <div className="col-md-8">
                                                <p>comment.text</p>

                                                <button className="btn rgba-amber-light btn-sm" >
                                                    <i className="fa fa-times-circle" />
                                                </button> : null

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </section>
            </React.Fragment>
        </Fragment>
    )
}

export default PostDetails