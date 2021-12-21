import { all } from 'redux-saga/effects';
import actionWatcher from './Saga/mySaga';

export function* rootSaga() {
    yield all(
        [
            actionWatcher()
        ]
    );
}



// return {
//     ...state,
//     contact:[...state.contact, action.payload]
// }

// return {
//         contact: action.payload
//      }


