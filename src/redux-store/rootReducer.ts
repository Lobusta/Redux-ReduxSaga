import { combineReducers } from "redux";
import { orderReducer } from "./orderReducer";
import { MenuReducer } from "./sagas/menu saga/menuReducer";



export const rootReducer = ({
    Order: orderReducer,
    Menu: MenuReducer

})

