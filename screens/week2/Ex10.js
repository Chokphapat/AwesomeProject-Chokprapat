import React from 'react';
import { View,Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function Ex10() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
    <View style={{ flex : 1 }}>    
      <View style={{ flex : 1,backgroundColor : '#4A90E2'   }}></View>      
    </View>
    <Button title="Next" onPress={() => navigation.navigate("Ex11")} />
    </View>
  );
}
