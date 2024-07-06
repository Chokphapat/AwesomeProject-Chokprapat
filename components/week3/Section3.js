import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Section3() {
    return (

    <View style={{ flexDirection : "row" ,marginTop:10 ,padding:10

    } }>
        <View style={{ height: 50, width: 50, borderRadius: 50/2, backgroundColor: '#FF6633', justifyContent: 'center', alignItems: 'center', }}>
        <Text style={{ fontSize: 20, color : "white" }}>9.5</Text>
    </View>
    <View style={{ flexDirection : "columm" ,margin:2}}>
        <Text style={{ fontSize : 16 , color : 'gray'}}>Excellent</Text>
     
        <Text style={{ fontSize : 16 , color : 'gray'}}>See 801 reviews</Text>
     </View>
    </View>
  
    );
}
