import React, { useEffect, useState } from 'react';
import { Alert, Image, SafeAreaView, AsyncStorage, Text, TouchableOpacity, View } from 'react-native';
import Modal from "react-native-modal"
import data from '../../utils/data';
import { styles } from "./styles"
import Timer from '../../components/Timer';
import { useNavigation } from "@react-navigation/native"
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from "../../store"
import { setEmergency } from "../../store/actions/emergencyActions"

interface Emergency {
  img: any,
  title: string

}

export interface User {
  user: {
    id: number,
    name: string,
    numberPhone: string
    birthDate: string
  }
}


const PanicDetail: React.FC = () => {
  const dispatch = useDispatch()
  const [emergencyInitial, setEmergencyInitial] = useState<Emergency[]>([])
  const [user, setUser] = useState<[]>([])
  const emegencyState = useSelector((state: RootStore) => state.emergency)


  const [modal, setModal] = useState<boolean>(false)
  const { navigate } = useNavigation()

  function handleModalToggle() {
    setModal(!modal)
  }

  function handleNavigationToPanicButton() {
    setModal(false)
    dispatch(setEmergency({ emergencyItems: [] }))
    navigate('PanicButton')
  }

  useEffect(() => {
    const { emergencyItems } = emegencyState
    let res = data.filter((item, index) => {
      if (emergencyItems.includes(item.id))
        return [item]
    })
    setEmergencyInitial(res)
  }, [])

  useEffect(() => {
    async function getUser() {
      const user = await AsyncStorage.getItem('@Store:user')
      console.log(user)
    }
    getUser()
  }, [])



  return <SafeAreaView style={styles.container}>
    <Timer />
    <View>
      <Text>{ }</Text>
    </View>
    <Text style={styles.text}>Emergências</Text>
    <View style={styles.contentButtton}>
      {emergencyInitial.map((item: Emergency, i: number) => (
        <View key={i} style={[styles.item]}>
          <Image source={item.img} style={styles.imgIcon} />
          <Text style={styles.textButton}>{item.title}</Text>
        </View>
      ))}
    </View>
    <TouchableOpacity style={styles.buttonCancelar} onPress={handleModalToggle}>
      <Text style={styles.txtButtonCancelar}>Cancelar</Text>
    </TouchableOpacity>
    <Modal isVisible={modal}>
      <View style={styles.modal}>
        <Text style={styles.textModal}>Tem Certeza que prentende cancelar?</Text>
        <View style={styles.modalContentButton} >
          <TouchableOpacity style={[styles.modalbutton, styles.modalbuttonSim]} onPress={handleNavigationToPanicButton}>
            <Text style={styles.modalTxtButton}>Sim</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.modalbutton, styles.modalbuttonNao]} onPress={handleModalToggle}>
            <Text style={styles.modalTxtButton}>Não</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  </SafeAreaView>
}

export default PanicDetail;