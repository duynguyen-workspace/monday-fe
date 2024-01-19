import { combineReducers } from "redux";
import userSlice from "./slices/user.slice";

export const rootReducer = combineReducers({
    //? slice's name: slice's reducer function
    [userSlice.name]: userSlice.reducer,
})