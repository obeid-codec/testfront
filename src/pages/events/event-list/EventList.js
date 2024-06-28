import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as eventActions from '../../../redux/events/event.actions';
import * as eventReducer from '../../../redux/events/event.reducer';
import * as groupReducer from '../../../redux/groups/groups.reducers';
import * as groupActions from '../../../redux/groups/groups.actions';
import Spinner from '../../../layout/misc/spinner/Spinner';
import { Link, useParams } from 'react-router-dom';
import './EventList.css'; // Import custom CSS for additional styling

const EventList = () => {
    const dispatch = useDispatch();
    const { groupId } = useParams();


    let eventsInfo = useSelector((state) => state[eventReducer.eventFeatureKey]);
    let { loading, events } = eventsInfo;

    const groupInfo = useSelector((state) => state[groupReducer.groupFeatureKey]);
    const { groups } = groupInfo;

    // useEffect(() => {
    //     dispatch(eventActions.getAllEvents());
    // }, [dispatch]);

    useEffect(() => {
        if (groupId) {
            dispatch(eventActions.getGroupEvent(groupId));
        } else {
            dispatch(eventActions.getAllEvents());
        }
    }, [dispatch, groupId]);

    useEffect(() => {
        dispatch(groupActions.getGroups());
    }, [dispatch]);

    const getGroupNameById = (groupId) => {
        const group = groups.find(group => group._id === groupId);
        return group ? group.name : 'Unknown Group';
    };

    return (
        <Fragment>
            {JSON.stringify(groupId)}
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-teal">Events</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam doloribus molestiae omnis quis! Autem commodi cum, doloremque ducimus et illo incidunt ipsa laboriosam magni natus nostrum nulla odio omnis praesentium recusandae, sit soluta ullam voluptatem?</p>
                            <p className="h5">Total Events Available: {events.length}</p>
                        </div>
                    </div>
                </div>
            </section>

            {loading ? <Spinner /> : (
                <Fragment>
                    {events.length > 0 ? (
                        <section>
                            <div className="container">
                                <div className="row">
                                    {events.map(event => (
                                        <div className="col-md-6 col-lg-4" key={event._id}>
                                            <div className="card mt-3">
                                                <img src={event.image} alt={event.name} className="card-img-top event-img" />
                                                <div className="card-body">
                                                    <h4 className="card-title">{event.name}</h4>
                                                    <p className="card-text">DATE: {new Date(event.eventDate).toLocaleString()}</p>
                                                    <h6 className="card-text">Group: {getGroupNameById(event.relatedGroupID)}</h6>
                                                    <Link to={`/events/event/${event._id}`} className="btn btn-outline-primary btn-sm mt-3">
                                                        <i className="fas fa-info-circle"></i> More ..
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {groupId ?
                                <Link to={`/events/`} className="btn btn-outline-primary btn-sm mt-3">
                                    <i className="fas fa-info-circle"></i> Back to all events
                                </Link>
                                : ""}
                        </section>
                    ) : (
                        <section className="p-3">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <p className="h5 text-center">No events available</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}
                </Fragment>
            )}
        </Fragment>
    );
}

export default EventList;
