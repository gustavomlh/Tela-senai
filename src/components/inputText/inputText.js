import React from "react";
import { TextInput, StyleSheet } from "react-native";

const InputText = ({ value, onChangeText, placeholder, keyboardType, autoCapitalize, secureTextEntry  }) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
      secureTextEntry={secureTextEntry}
      textContentType={secureTextEntry ? 'password' : 'none'}
    />

  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
});

export default InputText;