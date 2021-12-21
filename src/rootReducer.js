import  { combineReducers } from 'redux';
import contactReducer from './Reducers/reducer';
import { sessionReducer } from 'redux-react-session';


const rootReducer = combineReducers ({ 
    contactList: contactReducer,  
    session: sessionReducer
});

export default rootReducer;