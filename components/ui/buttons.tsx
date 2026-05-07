import { router } from 'expo-router';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/stylesSignUp';


export const ButtonSignUp: React.FC = () => {
  return(
    <TouchableOpacity 
      style={styles.buttonAuth}
      onPress={() => router.push( '/signIn')}>
      <Text style={styles.textButtonAuth}>Cadastrar</Text>
    </TouchableOpacity>
  )
}


export const ButtonSignIn: React.FC = () => {
  return(
    <TouchableOpacity 
      style={styles.buttonAuth}
      onPress={() => router.push( '/signIn')}>
      <Text style={styles.textButtonAuth}>Cadastrar</Text>
    </TouchableOpacity>
  )
}