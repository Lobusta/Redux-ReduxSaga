import { takeEvery } from "redux-saga/effects"
import { HandleMenu } from "./sagas/menu saga/menuHandler"

import { GET_MENU } from "./sagas/menu saga/menuActions"




export function* rootSaga() {
    yield takeEvery(GET_MENU, HandleMenu)
}

