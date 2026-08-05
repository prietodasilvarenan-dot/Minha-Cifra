import {
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function EditProfileScreen() {
  return (
    <ScrollView>
      <Text>Meu Perfil</Text>

      {/* Foto */}
      <View>
        <Image
          source={{ uri: "https://via.placeholder.com/120" }}
          width={120}
          height={120}
        />

        <TouchableOpacity>
          <Text>Alterar Foto</Text>
        </TouchableOpacity>
      </View>

      {/* Nome */}
      <View>
        <Text>Nome</Text>
        <TextInput placeholder="Digite seu nome" />
      </View>

      {/* Email */}
      <View>
        <Text>Email</Text>
        <TextInput
          placeholder="Digite seu e-mail"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      {/* Senha */}
      <View>
        <Text>Senha</Text>
        <TextInput placeholder="********" secureTextEntry />
      </View>

      {/* Plano */}
      <View>
        <Text>Plano</Text>
        <Text>Free</Text>

        <TouchableOpacity>
          <Text>Gerenciar Plano</Text>
        </TouchableOpacity>
      </View>

      {/* Salvar */}
      <TouchableOpacity>
        <Text>Salvar Alterações</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
