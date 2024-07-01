import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as eventActions from '../../../redux/events/event.actions'
import * as eventReducer from '../../../redux/events/event.reducer'
import * as userReducer from '../../../redux/users/users.reducer';
import * as groupReducer from '../../../redux/groups/groups.reducers';
import * as groupActions from '../../../redux/groups/groups.actions';

const Upload = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const userInfo = useSelector((state) => state[userReducer.usersFeatureKey]);
    const { user } = userInfo || {};


    const groupInfo = useSelector((state) => state[groupReducer.groupFeatureKey]);
    const { groups } = groupInfo;


    let [event, setEvent] = useState({
        name: "",
        image: "",
        description: "",
        eventDate: "",
        location: "",
        relatedGroupID: '',
    });



    useEffect(() => {
        dispatch(groupActions.getGroups());
    }, [dispatch]);


    const updateInput = (e) => {
        setEvent({
            ...event,
            [e.target.name]: e.target.value
        });
    };

    const handleFileChange = (e) => {
        setEvent({
            ...event,
            image: e.target.files[0]
        });
    };


    const submitUpload = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', event.name);
        formData.append('image', event.image);
        formData.append('description', event.description);
        formData.append('eventDate', event.eventDate);
        formData.append('location', event.location);
        formData.append('relatedGroupID', event.relatedGroupID);

        dispatch(eventActions.createEvent(formData, navigate));
        setEvent({
            name: "",
            image: "",
            description: "",
            eventDate: "",
            location: "",
            relatedGroupID: '',
        })
    };
    const getGroupNameById = (groupId) => {
        const group = groups.find(group => group._id === groupId);
        return group ? group.name : 'Unknown Group';
    };

    return (
        <Fragment>
            {/* {JSON.stringify(user)} */}
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-teal">
                                <i className="fa fa-file-upload" /> Create an Event</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam doloribus molestiae omnis quis! Autem commodi cum, doloremque ducimus et illo incidunt ipsa laboriosam magni natus nostrum nulla odio omnis praesentium recusandae, sit soluta ullam voluptatem?</p>
                        </div>
                    </div>
                </div>
            </section>
            {
                user?.isAdmin ? <React.Fragment>
                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">
                                    <form onSubmit={submitUpload}>
                                        <div className="form-group">
                                            <input
                                                name="name"
                                                value={event.name}
                                                onChange={updateInput}
                                                required
                                                type="text" className="form-control" placeholder="Name" />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                name="image"
                                                onChange={handleFileChange}
                                                required
                                                type="file" className="form-control" placeholder="Image" />
                                        </div>
                                        <div className="form-group">
                                            <select
                                                name="relatedGroupID"
                                                value={event.relatedGroupID}
                                                onChange={updateInput}
                                                required
                                                className="form-control">
                                                <option value="" disabled>Select a group</option>
                                                {groups.map((group) => (
                                                    <option key={group._id} value={group._id}>{group.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <input
                                                name="location"
                                                value={event.location}
                                                onChange={updateInput}
                                                required
                                                type="text" className="form-control" placeholder="Location" />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                name="eventDate"
                                                value={event.eventDate}
                                                onChange={updateInput}
                                                required
                                                type="date" className="form-control" placeholder="Date" />
                                        </div>
                                        <div className="form-group">
                                            <textarea
                                                name="description"
                                                value={event.description}
                                                onChange={updateInput}
                                                rows="4" className="form-control" placeholder="Description" />
                                        </div>
                                        <div>
                                            <input type="submit" className="btn btn-teal btn-sm" value="Upload" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </React.Fragment> :
                    <React.Fragment>
                        <section>
                            <div className="container">
                                <div className="row">
                                    <div className="col text-center">
                                        <p className="h4 text-danger">---------- You are not Authorized to Upload -----------</p>
                                        <small>If you are an admin ?, please contact your DBA to allow access</small>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </React.Fragment>
            }

        </Fragment>
    )
}

export default Upload