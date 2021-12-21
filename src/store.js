import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga';
import rootReducer  from './rootReducer';
import {rootSaga} from "./rootSaga";
import {sessionService} from "redux-react-session";

const contactStore = (preloadedState) => {
    const sagaMiddleware = createSagaMiddleware();
    const allMiddleware = applyMiddleware(sagaMiddleware);
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        rootReducer,
        preloadedState,
        composeEnhancer(allMiddleware)
    );
    sessionService.initSessionService(store, {refreshOnCheckAuth:true, driver:"LOCALSTORAGE"});
    sagaMiddleware.run(rootSaga);
    return store
} 

export default contactStore;
