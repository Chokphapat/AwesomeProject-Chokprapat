import React from 'react';
import { View } from 'react-native';

export default function Ex07() {
  return (
    <View style={{ flex : 1 , flexDirection : 'row-reverse',justifyContent: 'space-between',alignItems: 'center' }}>    
      <View style={{ backgroundColor : '#9013FE'  ,height : 150 ,width : 150 }}></View>
      <View style={{ backgroundColor : '#4A90E2' ,height : 150 ,width : 150   }}></View>
      <View style={{ backgroundColor : '#50E3C2' ,height : 150 ,width : 150   }}></View>      
    </View>
  );
}
