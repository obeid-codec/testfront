import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const PostList = () => {
    return (
        <Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-teal">
                                Welcome to React Social Community
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi dolores excepturi quaerat qui quia ullam ut voluptas! Aperiam corporis cumque eum harum, impedit necessitatibus nostrum optio rem repellat saepe?</p>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-md-8">
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
                                <div className="input-group mb-1">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">
                                            Image Url
                                        </span>
                                    </div>
                                    <input
                                        required
                                        name="image"
                                        type="text" className="form-control" placeholder="Image Url" />
                                </div>
                                <div>
                                    <input type="submit" className="btn btn-teal btn-sm" value="Post" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <hr />
                </div>
            </section>
            <section>

                <React.Fragment>
                    <div className="container">
                        <div className="row">
                            <div className="col">

                                <div className="card my-2" >
                                    <div className="card-body bg-light-grey">
                                        <div className="row">
                                            <div className="col-md-2">
                                                <img src="" alt="" className="rounded-circle" width="50" height="50" /><br />
                                                <small>post.name</small>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <img src="" alt="" className="img-fluid d-block m-auto" />
                                                    </div>
                                                </div>
                                                <p>post.text</p>
                                                <small>date</small><br />
                                                <button className="btn rgba-green-light btn-sm" >
                                                    <i className="fa fa-thumbs-up" /> post.likes.length
                                                </button>
                                                <button className="btn rgba-red-light btn-sm" >
                                                    <i className="fa fa-thumbs-down" />
                                                </button>
                                                <Link to={`/posts/post._id`} className="btn rgba-blue-light btn-sm">
                                                    <i className="fab fa-facebook-messenger" /> Discussions post.comments.length
                                                </Link>


                                                <button className="btn rgba-amber-light btn-sm">
                                                    <i className="fa fa-times-circle" />
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </React.Fragment>
            </section>
        </Fragment>
    )
}

export default PostList