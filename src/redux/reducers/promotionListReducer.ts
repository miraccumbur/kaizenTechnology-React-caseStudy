import {initialState} from "./initialState"
const promotionListReducer = async (state=initialState.promotionList)=>{
    // console.log(await state)
    return await state;
}

export{promotionListReducer}