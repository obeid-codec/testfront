import React, { Fragment } from 'react';
import * as alertReducer from '../../../redux/alert/alert.reducer';
import { useSelector } from "react-redux";

let Alert = () => {
    let alertInfo = useSelector((state) => {
        return state[alertReducer.alertFeatureKey];
    });

    let { messages } = alertInfo;

    return (
        <Fragment>
            {
                messages.length > 0 ?
                    <Fragment>
                        <div className={`alert alert-${messages[0].color} alert-dismissible m-2 fixed-top animated slideInDown`}>
                            <button className="close"><i className="fa fa-times-circle" /></button>
                            {
                                messages.map(alert => {
                                    return (
                                        <div key={alert.id}>
                                            <small className="font-weight-bold">{alert.message}</small><br />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </Fragment> : null
            }
        </Fragment>
    )
};
export default Alert;
