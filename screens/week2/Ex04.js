import React from 'react';
import { View,Button} from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function Ex04() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
    <View style={{ flex : 1 , flexDirection : 'column' }}>    
      <View style={{ backgroundColor : '#50E3C2' , squarelength : 100,height : 100 ,width : 100 }}></View>
      <View style={{ backgroundColor : '#4A90E2' , squarelength : 100,height : 100 ,width : 100 }}></View>
      <View style={{ backgroundColor : '#9013FE' , squarelength : 100,height : 100 ,width : 100 }}></View>      
    </View>
    <Button title="Next" onPress={() => navigation.navigate("Ex05")} />
    </View>
  );
}
