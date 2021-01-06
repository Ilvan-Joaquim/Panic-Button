import {
    Emergency,
    EmergencyActionTypes,
    EMERGENCY_SELECTED,
    EMERGENCY_SEND

} from "../actions/emergencyTypes"

const initialState: Emergency = {
    emergencyItems: [],
}

const emergencyReducer = (state = initialState, action: EmergencyActionTypes): Emergency => {
    switch (action.type) {
        case EMERGENCY_SELECTED:
            return {
                emergencyItems: action.payload.emergencyItems
            }
        default:
            return state
    }
}


export default emergencyReducer