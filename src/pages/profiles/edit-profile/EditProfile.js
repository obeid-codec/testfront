import React, { useState, useEffect, Fragment } from 'react';
import { Link, useNavigate } from "react-router-dom";
import * as profileActions from '../../../redux/profiles/profile.actions';
import * as profileReducer from '../../../redux/profiles/profile.reducer';
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../../layout/misc/spinner/Spinner";


let EditProfile = () => {
    let dispatch = useDispatch();
    let navigate = useNavigate();

    let [localProfile, setLocalProfile] = useState({
        youtube: '',
        facebook: '',
        twitter: '',
        linkedin: '',
        instagram: ''
    });

    let profileInfo = useSelector((state) => {
        return state[profileReducer.profileFeatureKey];
    });

    let { loading, profile } = profileInfo;

    useEffect(() => {
        dispatch(profileActions.getProfile());
        setLocalProfile({
            youtube: profile && profile.social?.youtube ? profile.social.youtube : '',
            twitter: profile && profile.social?.twitter ? profile.social.twitter : '',
            facebook: profile && profile.social?.facebook ? profile.social.facebook : '',
            instagram: profile && profile.social?.instagram ? profile.social.instagram : '',
            linkedin: profile && profile.social?.linkedin ? profile.social.linkedin : '',
        });
    }, [dispatch]);

    let updateInput = (event) => {
        setLocalProfile({
            ...localProfile,
            [event.target.name]: event.target.value
        });
    };

    let submitUpdateProfile = (event) => {
        event.preventDefault();
        dispatch(profileActions.updateProfile(localProfile, navigate));
    };

    return (
        <Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-teal">
                                <i className="fa fa-user-circle" />
                                Edit Profile
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque dignissimos distinctio dolor error expedita id incidunt, iusto laborum, molestiae mollitia optio placeat quod recusandae soluta unde, vel! Deserunt, quisquam!</p>
                        </div>
                    </div>
                </div>
            </section>
            {
                loading ? <Spinner /> :
                    <Fragment>
                        {/* <pre>{JSON.stringify(localProfile)}</pre>*/}
                        <section>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-8">
                                        <form onSubmit={submitUpdateProfile}>

                                            <small>Social Links</small>
                                            <div className="form-group">
                                                <input
                                                    required
                                                    name="youtube"
                                                    value={localProfile.youtube}
                                                    onChange={updateInput}
                                                    type="text" className="form-control" placeholder="YouTube" />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    required
                                                    name="twitter"
                                                    value={localProfile.twitter}
                                                    onChange={updateInput}
                                                    type="text" className="form-control" placeholder="Twitter" />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    required
                                                    name="facebook"
                                                    value={localProfile.facebook}
                                                    onChange={updateInput}
                                                    type="text" className="form-control" placeholder="Facebook" />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    required
                                                    name="linkedin"
                                                    value={localProfile.linkedin}
                                                    onChange={updateInput}
                                                    type="text" className="form-control" placeholder="LinkedIn" />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    required
                                                    name="instagram"
                                                    value={localProfile.instagram}
                                                    onChange={updateInput}
                                                    type="text" className="form-control" placeholder="Instagram" />
                                            </div>
                                            <div>
                                                <input type="submit" className="btn btn-teal btn-sm" value="Update" />
                                                <Link to="/profiles/dashboard" className="btn bg-light-grey btn-sm">Back</Link>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Fragment>
            }
            <div style={{ marginBottom: '150px' }} />
        </Fragment>
    )
};
export default EditProfile;
