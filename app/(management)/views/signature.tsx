import React from "react";
import { Button, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SubscriptionScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>Escolha seu plano</Text>

        <View>
          <Text>Plano Free</Text>
          <Text>R$ 0/mês</Text>
          <Text>• Recursos básicos</Text>
          <Text>• Lorem Ipsum</Text>
          <Text>• Lorem Ipsum free</Text>
          <Button title="Plano Atual" onPress={() => {}} />
        </View>

        <View>
          <Text>Plano Premium</Text>
          <Text>R$ 19,90/mês</Text>
          <Text>• Lorem Ipsum is a text</Text>
          <Text>• Backup na nuvem</Text>
          <Text>• Suporte prioritário</Text>
          <Button title="Assinar" onPress={() => {}} />
        </View>

        <View>
          <Text>Plano Pro</Text>
          <Text>R$ 39,90/mês</Text>
          <Text>• Todos os recursos Premium</Text>
          <Text>• Sincronização entre dispositivos</Text>
          <Text>• Recursos exclusivos</Text>
          <Text>• Suporte VIP</Text>
          <Button title="Assinar" onPress={() => {}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
