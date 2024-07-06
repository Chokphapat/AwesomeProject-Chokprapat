import React from "react";
import { Button, Image, Text, View } from "react-native";


export default function Section8() {
  return (
    
    <View style={{
        flexDirection : 'row' ,justifyContent: 'space-between',}}>
      
        <View style={{padding:30 ,flexDirection : 'collom' ,marginTop: -20 }}>
        <Text style={{ fontSize : 20 , color : 'black'}}>Price</Text>
        <Text style={{ fontSize : 20 , color : 'red'}}>$399.99</Text>
        <Text style={{ fontSize : 16 , color : 'black' }}>AVG/Night</Text>
        </View>
        <View style={{padding: 10 ,borderRadius:20,}}>
        
        <Button title="Book Now" color="#FF6600" variant="contained" size="large" />
        
        </View>
      
    </View>
  );
}
