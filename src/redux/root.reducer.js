import { combineReducers } from "redux";
import * as alertReducer from "./alert/alert.reducer";
import * as usersReducer from "./users/users.reducer";
import * as profileReducer from "./profiles/profile.reducer";
import * as studentReducer from "./students/student.reducer";

export const rootReducer = combineReducers({
    [alertReducer.alertFeatureKey]: alertReducer.reducer,
    [usersReducer.usersFeatureKey]: usersReducer.reducer,
    [profileReducer.profileFeatureKey]: profileReducer.reducer,
    [studentReducer.studentFeatureKey]: studentReducer.reducer,

});