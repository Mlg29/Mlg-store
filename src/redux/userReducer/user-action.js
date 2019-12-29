import userActionType from "../userReducer/user-type"

const SetCurrentUser = user => ({
    type: userActionType.SET_CURRENT_USER,
    payload: user
})

export default SetCurrentUser