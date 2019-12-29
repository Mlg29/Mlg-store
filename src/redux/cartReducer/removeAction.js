import CartActionType from "./cartActionType"


const removeItem = item => ({
    type: CartActionType.REMOVE_ITEM,
    payload: item
})


export default removeItem;