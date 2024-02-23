import React, { useState } from "react";
import { StyleSheet, View, Image} from "react-native";
import { ButtonForm, InputText } from "./src/components";
import LogoImage from './assets/LogoImage.png';


export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const submitButton = () => {
    console.log(`E-mail: ${email} $ Senha: ${senha}`);
  }

  return (
    <View style={style.container}>
      <View style={style.box}>
      <Image source={LogoImage} style={style.logo}/>
        <View style={{ flex: 1, justifyContent: 'flex-end' }} />
        <InputText
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <View style={{ marginBottom: 16 }} />
        <InputText
          value={senha}
          onChangeText={(text) => setSenha(text)}
          placeholder="Senha"
          secureTextEntry={true}
          autoCapitalize="none"
        />
        <ButtonForm onPress={submitButton}/>
      </View>
    </View>
  );
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
  },
  logo: {
    width: 250, 
    height: 250, 
    resizeMode: 'contain',
    alignSelf: "center" 
  },
  box: {
    width: 350,
    height: 450,
    padding: 16,
    borderRadius: 10,
    backgroundColor: "#fff",
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 7,
    marginTop: -100
  }
})


