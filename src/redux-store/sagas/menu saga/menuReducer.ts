import { AnyAction } from "redux";
import { SET_MENU } from "./menuActions";


export interface MenuType {
    menuItem: Object
}


const initialState = {
    menuItem: {}
}


export const MenuReducer = (state = initialState, action:AnyAction):MenuType =>{

    switch(action.type){
        case SET_MENU:
            const {menuItem} = action;
            return{...state ,menuItem: menuItem }
        default:
            return state;

    }

}