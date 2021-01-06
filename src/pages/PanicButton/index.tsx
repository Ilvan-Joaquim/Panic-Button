import React, { useEffect, useState } from 'react';
import { Alert, Image, SafeAreaView, ScrollView, AsyncStorage, Text, TouchableOpacity, View } from 'react-native';
import logoImg from "../../assets/logo.png"
import logoActiveImg from "../../assets/background-logo.png"
import data from '../../utils/data';
import { styles } from "./styles"
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { setEmergency, sendEmergency } from "../../store/actions/emergencyActions"
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from "../../store"
import * as Location from 'expo-location';



interface User {
  id: number,
  name: string,
  numberPhone: string
  birthDate: string
}

const PanicButton: React.FC = () => {

  const dispatch = useDispatch()
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [logoActive, setLogoActive] = useState<boolean>(false);
  const [user, setUser] = useState<User>({
    id: 0,
    name: "",
    numberPhone: "",
    birthDate: ""
  });
  const emegencyState = useSelector((state: RootStore) => state.emergency)
  const [location, setLocation] = useState<Location.LocationData>({
    coords: {
      accuracy: 0,
      altitude: 0,
      heading: 0,
      latitude: 0,
      longitude: 0,
      speed: 0
    },
    timestamp: 0
  });
  const { navigate } = useNavigation()
  const { emergencyItems } = emegencyState

  useEffect(() => {
    if (!emergencyItems) {
      setSelectedItems(emergencyItems)
      console.log("development")
    }
  }, [])

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('A permissão para acessar o local foi negada')
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  useEffect(() => {

    if (selectedItems.length > 0) {
      setLogoActive(true)
    } else {
      setLogoActive(false)
    }
  }, [selectedItems]);

  function handleSelectItem(id: number) {
    const alreadySelected = selectedItems.findIndex(item => item === id);

    if (alreadySelected >= 0) {
      const filteredItems = selectedItems.filter(item => item !== id);
      setSelectedItems(filteredItems);
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  }

  useEffect(() => {
    async function getUser() {
      const user = await AsyncStorage.getItem('@Store:user')
      setUser(JSON.parse(String(user)))
    }
    getUser()
  }, [])


  function handleNavigationToPanicDetail() {
    if (selectedItems.length > 0) {
      dispatch(setEmergency({ emergencyItems: selectedItems }))
      dispatch(sendEmergency({ selectedItems, location, user }))
      navigate("PanicDetail")
    }
  }

  function handleButtonPanic(logoImg: HTMLImageElement) {
    return <RectButton style={styles.btnPanic} onPress={handleNavigationToPanicDetail}>
      <Image source={logoImg} style={styles.img} />
    </RectButton>
  }

  return <SafeAreaView style={styles.container}>
    <View style={styles.contentImg}>
      {
        logoActive ? handleButtonPanic(logoImg) : handleButtonPanic(logoActiveImg)
      }
    </View>
    <Text style={styles.text}>Selecione uma ou mais opções abaixo:</Text>

    <View style={styles.contentButtton}>
      {data.map((item, i) => (
        <TouchableOpacity key={i} style={[styles.item, selectedItems.includes(item.id) ? styles.selectedItem : {}]}
          onPress={() => handleSelectItem(item.id)}
          activeOpacity={0.6}>
          <Image source={item.img} style={styles.imgIcon} />
          <Text style={styles.textButton}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  </SafeAreaView>;
}

export default PanicButton;