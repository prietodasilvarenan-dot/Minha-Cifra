import { useState } from 'react';
import { TextInput } from 'react-native';
import { styles } from '../stylesSignUp';

export const EmailArea: React.FC = () => {
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
  
export const PasswordArea: React.FC = () => {
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
  
export const ConfirmPasswordArea: React.FC = () => {
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