export const USER_SAVE = "USER_SAVE"


export interface User {
  user: {
    id?: number,
    name: string,
    numberPhone: string
    birthDate: string
  }
}

export type UserSaveAction = {
    type: typeof USER_SAVE,
    payload: User
}




export type UserActionTypes = UserSaveAction 