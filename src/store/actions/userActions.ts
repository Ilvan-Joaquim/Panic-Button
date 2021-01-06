import { AsyncStorage } from "react-native"
import { Dispatch } from "redux"
import api from "../../services/api"
import { USER_SAVE, UserActionTypes, UserSaveAction, User } from "./userTypes"

interface Cidadao {
    idCidadao: number
    dtNascimento: string,
    nome: string,
    telefone: string
}

export const fetchUserSave =
    (user: User) =>
        async (dispatch: Dispatch<UserActionTypes>) => {

            const { name, birthDate, numberPhone } = user.user
            const userNew = await api.post<Cidadao>("/cidadao", {
                dtNascimento: birthDate,
                nome: name,
                telefone: numberPhone
            })

            console.log(userNew.data.dtNascimento)

            let store = {
                user: {
                    id: userNew.data.idCidadao,
                    birthDate: userNew.data.dtNascimento,
                    name: userNew.data.nome,
                    numberPhone: userNew.data.telefone
                }
            }


            await AsyncStorage.setItem('@Store:user', JSON.stringify(store))
            dispatch({
                type: USER_SAVE,
                payload: store
            })
        }


