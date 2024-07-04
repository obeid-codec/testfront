import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as groupReducer from '../../../redux/groups/groups.reducers'
import * as groupActions from '../../../redux/groups/groups.actions'
import * as userReducer from '../../../redux/users/users.reducer';
import { useDispatch, useSelector } from 'react-redux';
const GroupEdit = () => {
    const { groupId } = useParams()
    const navigate = useNavigate()





    let [localGroup, setLocalGroup] = useState({
        name: '',
        description: '',
    });

    let dispatch = useDispatch();

    const userInfo = useSelector((state) => state[userReducer.usersFeatureKey]);

    const { user } = userInfo || {};

    const groupInfo = useSelector((state) => {
        return state[groupReducer.groupFeatureKey]
    })

    let { loading, selectedGroup } = groupInfo;


    useEffect(() => {
        dispatch(groupActions.getSpecificGroup(groupId));
    }, [dispatch, groupId]);

    useEffect(() => {
        if (selectedGroup) {
            setLocalGroup({
                name: selectedGroup.name,
                description: selectedGroup.description,
            });
        }
    }, [selectedGroup]);
    let updateInput = (e) => {
        setLocalGroup({
            ...localGroup,
            [e.target.name]: e.target.value
        });
    };

    const submitEditGroup = (e) => {
        e.preventDefault();
        dispatch(groupActions.updateGroup(groupId, localGroup, navigate));

    }


    return (
        <Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-teal">
                                UniConnect Group Edit
                            </p>
                            <p className='h5'>Edit STUDY GROUP</p>

                        </div>
                    </div>
                    <div className="row">
                        {
                            Object.keys(user).length > 0 && user.isAdmin &&
                            <div className="col-md-8">
                                <form onSubmit={submitEditGroup}>
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
                                        <input type="submit" className="btn btn-teal btn-sm" value="Edit" />
                                    </div>
                                </form>
                            </div>
                        }
                    </div>
                    <hr />
                </div>
            </section>
        </Fragment>
    )
}

export default GroupEdit