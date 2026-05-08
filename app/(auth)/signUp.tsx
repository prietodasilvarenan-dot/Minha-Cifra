
import React, { useState } from 'react'; 
import { Text, View, Alert } from 'react-native';
import { styles } from '../../components/styles/stylesSign';
import { ConfirmPasswordArea, EmailArea, PasswordArea } from '../../components/ui/areas';
import { ButtonSignUp } from '../../components/ui/buttons';
import { api } from '../../services/api';
import User from '../../services/model/User';
import { useRouter } from 'expo-router'; 

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const router = useRouter();

  const handleRegister = async () => { 
    if (!email || !password || !confirmPassword){
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }
    if (password !== confirmPassword){
      Alert.alert("Erro", "Senhas não coincidem!");
      return;
    }
    try {
      const newUser = new User(email, password);

      const response = await api.post('/register', {
        email: newUser.getEmail(),
        password: newUser.getPassword()
      });

      if (response.status === 201){
        Alert.alert("Sucesso", "Usuário casdastrado!");
        router.replace('/signIn');
      }
    } catch(error: any){
      const msg = error.response?.data?.error || "Erro ao conectar com o servidor";
      Alert.alert("Erro no Cadastro", msg);
    }
  }
  return (

      <View style={styles.container}>
        <Text>Minha Cifra</Text>
        <EmailArea value={email} onChangeText={setEmail} />
        <PasswordArea value={password} onChangeText={setPassword} />
        <ConfirmPasswordArea value={confirmPassword} onChangeText={setConfirmPassword} />

        <ButtonSignUp onPress={handleRegister}/>
      </View>
  );
}
