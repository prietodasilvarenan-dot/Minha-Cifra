
import { Text, View } from 'react-native';
import { styles } from '../../components/stylesSignUp';
import { EmailArea, PasswordArea } from '../../components/ui/areas';
import { ButtonSignUp } from '../../components/ui/buttons';

export default function SignIn() {
  
  return (
    <View style={styles.container}>
      <Text>Minha Cifra</Text>
      <EmailArea/>
      <PasswordArea/>
      <ButtonSignUp/>
    </View>
  );
}
