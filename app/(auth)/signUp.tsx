
import { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function SignUp() {
  
  return (
    <View style={styles.container}>
      <EmailArea/>
      <PasswordArea/>
      <PasswordArea/>

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
      keyboardType='default'
    />
  );
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
});