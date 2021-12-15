import { createStore } from 'redux';
import contactReducer  from './Reducers/reducer';

const contactStore = (state = {contactForm:[]}) => {
    return createStore (
        contactReducer,
        state,
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    )
}

export default contactStore;