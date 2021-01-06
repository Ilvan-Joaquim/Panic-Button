import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { AppLoading } from 'expo';
import { Provider } from "react-redux"
import { AsyncStorage } from "react-native"
import store from "./src/store"
import { NavigationContainer } from "@react-navigation/native"
import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import Routes from "./src/routes"




import AppStack from './src/routes/app.routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (

      <Provider store={store}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
        <StatusBar style="dark" backgroundColor="transparent" translucent />
      </Provider>

    )
  }

}