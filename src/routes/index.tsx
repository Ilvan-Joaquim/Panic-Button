import React, { useEffect, useState } from "react"
import AuthRoutes from "./auth.routes"
import { AsyncStorage } from "react-native";
import AppStack from "./app.routes";

interface User {
    name: string,
    numberPhone: string
    birthDate: string
  }

const Routes: React.FC = () => {
    const [user, setUser] = useState<User>({
        name: "",
        numberPhone: "",
        birthDate: ""
      });
      useEffect(() => {
        async function getUser() {
          const user = await AsyncStorage.getItem('@Store:user')
          setUser(JSON.parse(String(user)))
        }
        getUser()
      }, [])

    return user ? <AppStack /> : <AuthRoutes />
}

export default Routes