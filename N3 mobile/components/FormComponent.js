import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

const FormComponent = () => {
  const [name, setName] = useState("");
  const [idade, setIdade] = useState("");
  const [email, setEmail] = useState("");

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite sua idade"
        value={idade}
        onChangeText={setIdade}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        value={email}
        onChangeText={setEmail}
      />
      <Text style={styles.text}>Olá, {name}!</Text>
      <Text style={styles.text}>Sua idade: {idade}!</Text>
      <Text style={styles.text}>Seu email: {email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    width: "100%",
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
  },
});

export default FormComponent;
