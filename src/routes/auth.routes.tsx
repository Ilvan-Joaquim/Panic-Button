
import React from "react"
import Landing from "../pages/Landing"

import { createStackNavigator } from "@react-navigation/stack"
const { Navigator, Screen } = createStackNavigator()

const AuthRoutes: React.FC = () => {
    return (
        <Navigator>
            <Screen name="Landing" component={Landing}></Screen>
        </Navigator>
    )
}
export default AuthRoutes