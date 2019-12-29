import CartActionType from "./cartActionType"

const addItem = item => ({
    type: CartActionType.ADD_ITEM,
    payload: item
})

export default addItem