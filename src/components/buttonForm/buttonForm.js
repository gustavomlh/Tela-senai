import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const ButtonForm = ({ onPress }) => (
  <Button
    mode="contained"
    onPress={onPress}
    style={style.container}
  >
    Enviar
  </Button>
);

const style = StyleSheet.create({
  container: {
    marginTop: 16, 
    backgroundColor: "#007BFF", 
    borderRadius: 8, 
    height: 40
  }
});



export default ButtonForm;