import { call, put } from "redux-saga/effects";
import { setMenu } from "./menuActions";
import { GetMenuFromUrl} from "./menuRequest";






export function* HandleMenu ():Object {

    try{
        const response =yield call(GetMenuFromUrl);
        const {data} = response;
       // const foodItems = response.results;
        yield put(setMenu(data.results))
    

    }

    catch(error)
      {  console.log("ERROR_HANDLER_FUNCTION:" + error);
    }



}