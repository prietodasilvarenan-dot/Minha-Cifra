
import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SignUp() {
  
  return (
    <View style={styles.container}>
      <Text>Minha Cifra</Text>
      <EmailArea/>
      <PasswordArea/>
      <ConfirmPasswordArea/>

      <ButtonSignUp/>
    </View>
  );
}

const EmailArea: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  return (
    <TextInput
      style={styles.input}
      value={email}
      onChangeText={setEmail}
      placeholder='Digite seu Email'
      keyboardType='email-address'
    />
  );
}

const PasswordArea: React.FC = () => {
  const [password, setPassword] = useState<string>("");

  return (
    <TextInput
      style={styles.input}
      value={password}
      onChangeText={setPassword}
      placeholder='Digite sua Senha'
      //secureTextEntry
    />
  );
}

const ConfirmPasswordArea: React.FC = () => {
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  return (
    <TextInput
      style={styles.input}
      value={confirmPassword}
      onChangeText={setConfirmPassword}
      placeholder='Digite sua Senha'
      //secureTextEntry
    />
  );
}

const ButtonSignUp: React.FC = () => {
  return(
    <TouchableOpacity 
      style={styles.buttonAuth}
      onPress={() => router.push( '/signIn')}>
      <Text style={styles.textButtonAuth}>Cadastrar</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ffffff'
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  buttonAuth: {
    backgroundColor: '#0018a4',
    alignItems: 'center',
    padding: 5,
  },
  textButtonAuth:{
    color: '#ffffff',
    fontSize: 22,
  },
});