import {
    User,
    UserActionTypes,
    USER_SAVE
} from "../actions/userTypes"

const initialState: User = {
    user: {
        id: 0,
        name: "",
        numberPhone: "",
        birthDate: ""
    }
}

const userReducer = (state = initialState, action: UserActionTypes): User => {
    switch (action.type) {
        case USER_SAVE:
            return {
                user: action.payload.user
            }
        default:
            return state
    }
}


export default userReducer