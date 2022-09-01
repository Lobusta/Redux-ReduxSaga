import { ActionTypes } from "./orderActions"
//import { OrderAction } from "./orderActions"
import { AnyAction } from "redux"

export interface stateType {
    count:number,
    orders: string[] 
}

const initialState = {
    count: 0,
    orders: []
}


export const orderReducer = (state:stateType = initialState, action:AnyAction):stateType=>{
    switch(action.type){
        case ActionTypes.ADDORDER:
            return { 
                ...state,
                count: state.count + action.payload.count,
                orders:[...state.orders, action.payload.ordername]
            }
        default:
            return state;
    }

}


