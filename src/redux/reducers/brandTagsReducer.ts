import {initialState} from "./initialState"
const brandTagsReducer = async (state=initialState.brandTags)=>{
    console.log(await state)
    return await state;
}

export{brandTagsReducer}