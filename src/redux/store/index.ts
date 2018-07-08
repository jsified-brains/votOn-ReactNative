import { createStore } from "redux";
import {AppReducer} from '../reducers/AppReducers';

export const AppStore = createStore( AppReducer );

// export default store;
