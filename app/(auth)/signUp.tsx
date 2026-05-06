
import { Text, View } from 'react-native';
import { styles } from '../../components/stylesSignUp';
import { ConfirmPasswordArea, EmailArea, PasswordArea } from '../../components/ui/areas';
import { ButtonSignUp } from '../../components/ui/buttons';

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
