import React, { useState, useEffect } from 'react';
import { View, Image, Text, ImageBackground, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { styles } from "./styles"

import backgroundImg from "../../assets/background-logo.png"
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker'
import { FontAwesome5 } from '@expo/vector-icons';
import { Formik } from 'formik';
import { fetchUserSave } from "../../store/actions/userActions";
import * as Yup from 'yup';

import { useDispatch } from 'react-redux';


interface User {
  name: string,
  numberPhone: string
}


const Landing: React.FC = () => {

  const [date, setDate] = useState(new Date(Date.now()));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const dispatch = useDispatch()
  const { navigate } = useNavigation()



  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode: string) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  function handleNavigationToPanicButton() {
    navigate("PanicButton")
  }




  const Onsubmit = async (values: User) => {
    const { name, numberPhone } = values
    let user = {
      name,
      numberPhone,
      birthDate: date.toLocaleDateString(),
    }

    if (user) {
     
      dispatch(fetchUserSave({ user }))
      handleNavigationToPanicButton()
    }
  }

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .max(50, 'Too Long!')
      .required('Required'),
    numberPhone: Yup.string()
      .required('Required'),
  });
  return (


    <ImageBackground style={{ flex: 1 }} source={backgroundImg} imageStyle={styles.bgImg}>
      <KeyboardAvoidingView
        style={{ flex: 1, justifyContent: "center" }}
        behavior={Platform.OS == "ios" ? "padding" : "height"}>

        <View style={styles.content}>
          <Text style={styles.title}>Registro</Text>
          <Formik
            validationSchema={SignupSchema}
            initialValues={{ name: '', numberPhone: '' }}
            onSubmit={(values: User) => console.log(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
              <View>
                <TextInput
                  style={[styles.textInput, errors.name ? styles.textInputError : {}]}
                  onChangeText={handleChange('name')}
                  placeholder="Nome"
                />
                <TextInput
                  style={[styles.textInput, errors.numberPhone ? styles.textInputError : {}]}
                  onChangeText={handleChange('numberPhone')}
                  placeholder="+244"
                />

                <TouchableOpacity
                  style={styles.calendar}
                  onPress={showDatepicker}>
                  <Text style={styles.textCalendar}>{date.toLocaleDateString()}</Text>
                  <FontAwesome5 name="calendar-alt" size={24} color="gray" />
                </TouchableOpacity>

                {show && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                  />
                )}

                <View>
                  <RectButton style={styles.btn} onPress={handleSubmit}>
                    <Text style={styles.textButton}>Cadastrar</Text>
                  </RectButton>
                </View>
              </View>

            )}
          </Formik>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

export default Landing;