import { combineReducers } from 'redux'
import userReducer from "./UserReducer"
import emergencyReducer from "./EmergencyReducer"


const RootReducer = combineReducers({
    user: userReducer,
    emergency: emergencyReducer
})


export default RootReducer