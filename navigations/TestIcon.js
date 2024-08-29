import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native';

export default function TestIcon() {
  return (
    <View style={{ flexDirection: "row", marginTop: 50 }}>
      <TouchableOpacity onPress={() => console.log("Flex icon pressed")}>
        <View style={{ alignItems: 'center' }}>
          <FontAwesome name="th" size={30} color="orange" />
          <Text>Flex</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
