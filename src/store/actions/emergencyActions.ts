import { Dispatch } from "redux"
import api from "../../services/api"
import { Emergency, SendEmergency, EMERGENCY_SELECTED, EmergencyActionTypes } from "./emergencyTypes"

export const setEmergency =
    (emergency: Emergency) =>
        async (dispatch: Dispatch<EmergencyActionTypes>) => {
            dispatch({
                type: EMERGENCY_SELECTED,
                payload: emergency
            })
        }

export const sendEmergency =
    (emergency: SendEmergency) =>
        async (dispatch: Dispatch<EmergencyActionTypes>) => {
            const { selectedItems, location, user } = emergency
            await api.post("/emergencia", {
                dataHora: location.timestamp,
                idCidadao: {
                    idCidadao: user.id,
                    dtNascimento: user.birthDate,
                    nome: user.name,
                    telefone: user.numberPhone
                },
                idLocalizacao: {
                    latitude: location.coords.latitude,
                    longetude: location.coords.longitude
                },
                status: false,
                tipoDeEmergencia: selectedItems
            })
        }

