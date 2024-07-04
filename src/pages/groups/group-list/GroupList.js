import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import * as groupReducer from '../../../redux/groups/groups.reducers';
import * as groupActions from '../../../redux/groups/groups.actions';
import * as userReducer from '../../../redux/users/users.reducer';
import Spinner from '../../../layout/misc/spinner/Spinner';
import './GroupList.css'; // Import the custom CSS file

const GroupList = () => {
    const [localGroup, setLocalGroup] = useState({
        name: '',
        description: ''
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userInfo = useSelector((state) => state[userReducer.usersFeatureKey]);
    const { user } = userInfo || {};

    const groupInfo = useSelector((state) => state[groupReducer.groupFeatureKey]);
    const { loading, groups } = groupInfo;

    useEffect(() => {
        dispatch(groupActions.getGroups());
    }, [dispatch]);

    const updateInput = (e) => {
        setLocalGroup({
            ...localGroup,
            [e.target.name]: e.target.value
        });
    };

    const submitCreateGroup = (e) => {
        e.preventDefault();
        dispatch(groupActions.createGroup(localGroup, navigate));
        setLocalGroup({
            name: '',
            description: ''
        });
    };

    const clickDeleteGroup = (groupId) => {
        dispatch(groupActions.deleteGroup(groupId)).then(() => {
            dispatch(groupActions.getGroups());
        });
    };

    return (
        <Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row mb-4">
                        <div className="col">
                            <h3 className="text-teal">UniConnect Groups</h3>
                            <h5>Add a New Study Group</h5>
                        </div>
                    </div>
                    {user.isAdmin && (
                        <div className="row mb-4">
                            <div className="col-md-8">
                                <form onSubmit={submitCreateGroup}>
                                    <div className="mb-3">
                                        <input
                                            required
                                            name="name"
                                            value={localGroup.name}
                                            onChange={updateInput}
                                            type="text"
                                            className="form-control"
                                            placeholder="Group Name"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <textarea
                                            required
                                            name="description"
                                            value={localGroup.description}
                                            onChange={updateInput}
                                            rows="3"
                                            className="form-control"
                                            placeholder="Description"
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-teal">Create Group</button>
                                </form>
                            </div>
                        </div>
                    )}
                    <hr />
                </div>
            </section>

            <section>
                {loading ? (
                    <Spinner />
                ) : (
                    <Fragment>
                        {groups.length > 0 && (
                            <div className="container">
                                <div className="row">
                                    {groups.map((group) => (
                                        <div className="col-lg-4 col-md-6 mb-4" key={group._id}>
                                            <div className="card h-100">
                                                <div className="card-body d-flex flex-column">
                                                    <h5 className="card-title">{group.name}</h5>
                                                    <p className="card-text">{group.description}</p>
                                                    <div className="mt-auto">
                                                        <Link to={`/groups/${group._id}`} className="btn btn-outline-primary btn-sm me-2 mb-2">
                                                            Visit
                                                        </Link>

                                                        <Link to={`/events/${group._id}`} className="btn btn-outline-primary btn-sm me-2 mb-2">
                                                            EVENTS
                                                        </Link>

                                                        {user.isAdmin && (
                                                            <>
                                                                <Link to={`/groups/edit/${group._id}`} className="btn btn-outline-warning btn-sm me-2 mb-2">
                                                                    Update
                                                                </Link>
                                                                <button
                                                                    className="btn btn-outline-danger btn-sm mb-2"
                                                                    onClick={() => clickDeleteGroup(group._id)}
                                                                >
                                                                    Delete
                                                                </button>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </Fragment>
                )}
            </section>
        </Fragment>
    );
};

export default GroupList;
