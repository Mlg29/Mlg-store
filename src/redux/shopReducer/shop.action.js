import ShopActionTypes from "./shop.type"

export const updateCollection = collectionsMap=> ({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap
})