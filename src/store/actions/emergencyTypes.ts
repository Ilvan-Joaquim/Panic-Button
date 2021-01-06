export const EMERGENCY_SELECTED = "EMERGENCY_SELECTED"
export const EMERGENCY_SEND = "EMERGENCY_SEND"


export interface Emergency {
    emergencyItems: number[]
}

export interface SendEmergency {
    selectedItems: number[],
    user: {
        id?: number
        name: string,
        numberPhone: string
        birthDate: string
    }
    location: {
        coords: {
            accuracy: number,
            altitude: number,
            heading: number,
            latitude: number,
            longitude: number,
            speed: number,
        },
        timestamp: number,
    }
}



export type EmergencySelectedAction = {
    type: typeof EMERGENCY_SELECTED,
    payload: Emergency
}

export type EmergencySendAction = {
    type: typeof EMERGENCY_SEND,
    payload: SendEmergency
}

export type EmergencyActionTypes = EmergencySelectedAction | EmergencySendAction