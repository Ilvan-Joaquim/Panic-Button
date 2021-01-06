

import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import Landing from "../pages/Landing"
import PanicButton from "../pages/PanicButton"
import PanicDetail from "../pages/PanicDetail"

function AppStack() {

    const { Navigator, Screen  } = createStackNavigator()
    return (
       <NavigationContainer>
           <Navigator screenOptions={{ headerShown: false }}>
               <Screen name="Landing" component={Landing} />
               <Screen name="PanicButton" component={PanicButton} />
               <Screen name="PanicDetail" component={PanicDetail} />
           </Navigator>
       </NavigationContainer>
    )
}

export default  AppStack