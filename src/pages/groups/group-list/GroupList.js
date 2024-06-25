import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import * as groupReducer from '../../../redux/groups/groups.reducers'
import * as groupActions from '../../../redux/groups/groups.actions'
import * as userReducer from '../../../redux/users/users.reducer';
import Spinner from '../../../layout/misc/spinner/Spinner';

const GroupList = () => {

    let [localGroup, setLocalGroup] = useState({
        name: '',
        description: '',
    });

    let dispatch = useDispatch();
    const navigate = useNavigate()

    const userInfo = useSelector((state) => state[userReducer.usersFeatureKey]);

    const { user } = userInfo || {};

    const groupInfo = useSelector((state) => {
        return state[groupReducer.groupFeatureKey]
    })

    let { loading, groups } = groupInfo;


    useEffect(() => {
        dispatch(groupActions.getGroups())
    }, [])

    let updateInput = (e) => {
        setLocalGroup({
            ...localGroup,
            [e.target.name]: e.target.value
        });
    };

    const submitCreateGroup = (e) => {
        e.preventDefault();
        dispatch(groupActions.createGroup(localGroup));
        setLocalGroup({
            name: '',
            description: ''
        })
    }

    const clickDeleteGroup = (groupId) => {

        dispatch(groupActions.deleteGroup(groupId));
    };

    return (
        <Fragment>
            {JSON.stringify(user)}
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-teal">
                                UniConnect Groups
                            </p>
                            <p className='h5'>ADD A NEW STUDY GROUP</p>

                        </div>
                    </div>
                    <div className="row">
                        {
                            Object.keys(user).length > 0 && user.isAdmin &&
                            <div className="col-md-8">
                                <form onSubmit={submitCreateGroup}>
                                    <div className="input-group mb-1">
                                        <input
                                            required
                                            name="name"
                                            value={localGroup.name}
                                            onChange={updateInput}
                                            type="text" className="form-control" placeholder="Group Name" />
                                    </div>
                                    <div className="input-group mb-1">
                                        <div className="input-group-prepend">
                                        </div>
                                        <textarea
                                            required
                                            name="description"
                                            value={localGroup.description}
                                            onChange={updateInput}
                                            rows="3" className="form-control" placeholder="Description.." />
                                    </div>

                                    <div>
                                        <input type="submit" className="btn btn-teal btn-sm" value="Post" />
                                    </div>
                                </form>
                            </div>
                        }
                    </div>
                    <hr />
                </div>
            </section>

            <section>
                {
                    loading ? <Spinner /> :
                        <Fragment>
                            {
                                groups.length > 0 &&
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            {
                                                groups.map(group => {
                                                    return (
                                                        <div className="card my-2" key={group._id}>
                                                            <div className="card-body bg-light-grey">
                                                                <div className="row">
                                                                    <div className="col-md-2">
                                                                        <b>{group.name}</b>
                                                                    </div>
                                                                    <div className="col-md-8">

                                                                        <p>{group.description}</p>

                                                                        <Link to={`/groups/${group._id}`} className="btn rgba-blue-light btn-sm">
                                                                            <i className="fab fa-facebook-messenger" /> VISIT

                                                                        </Link>
                                                                        {
                                                                            user.isAdmin ?
                                                                                <Link to={`/groups/edit/${group._id}`} className="btn rgba-blue-light btn-sm">
                                                                                    <i className="fab fa-facebook-messenger" /> UPDATE

                                                                                </Link>

                                                                                : null
                                                                        }
                                                                        {
                                                                            user.isAdmin ?
                                                                                <button className="btn rgba-amber-light btn-sm" onClick={clickDeleteGroup.bind(this, group._id)}>
                                                                                    <i className="fa fa-times-circle" />
                                                                                </button> : null
                                                                        }

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            }
                        </Fragment>
                }
            </section>



        </Fragment>
    )
}

export default GroupList