

import React from 'react'
import { View, Text } from 'react-native'

import { createStackNavigator } from "@react-navigation/stack"

import Landing from "../pages/Landing"
import PanicButton from "../pages/PanicButton"
import PanicDetail from "../pages/PanicDetail"

const { Navigator, Screen } = createStackNavigator()

function AppStack() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="PanicButton" component={PanicButton} />
            <Screen name="PanicDetail" component={PanicDetail} />
        </Navigator>
    )
}

export default AppStack