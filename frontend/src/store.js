import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import adminSigninReducer from "./store/reducers/authReducers";
import { blogDeleteReducer, blogListReducer, blogSaveReducer } from "./store/reducers/blogReducers";
import messageReducer from "./store/reducers/messageReducers";
import { profileEditReducer, profileListReducer } from "./store/reducers/profileReducers";
import { projectDeleteReducer, projectListReducer, projectSaveReducer } from "./store/reducers/projectReducers";

const initialState = { adminSignin: {
  auth: localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : null,
},};
const reducer = combineReducers({
  adminSignin: adminSigninReducer,

  messageSend: messageReducer,

  profileList: profileListReducer,
  profileEdit: profileEditReducer,

  blogList: blogListReducer,
  blogSave: blogSaveReducer,
  blogDelete: blogDeleteReducer,


  projectList: projectListReducer,
  projectSave: projectSaveReducer,
  projectDelete: projectDeleteReducer,
 


 
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
