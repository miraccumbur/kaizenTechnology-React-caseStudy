import{combineReducers} from "redux";
import { brandTagsReducer } from "./brandTagsReducer";
import {promotionListReducer} from "./promotionListReducer"

const reducers = combineReducers({
    brandTagsReducer,
    promotionListReducer
});
export {reducers}