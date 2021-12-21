import {takeLatest,  put} from "redux-saga/effects";
import {setContact} from '../Actions/action';

export default function* actionWatcher() {
    yield takeLatest("CREATE_CONTACT", actionWorker)
}

export function* actionWorker(action) {
    console.log(action)
    yield put(setContact(action.payload))
}



