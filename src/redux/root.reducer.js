import { combineReducers } from "redux";
import * as alertReducer from "./alert/alert.reducer";
import * as usersReducer from "./users/users.reducer";


export const rootReducer = combineReducers({
    [alertReducer.alertFeatureKey]: alertReducer.reducer,
    [usersReducer.usersFeatureKey]: usersReducer.reducer,
});