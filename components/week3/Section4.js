import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Section4() {
    return (
        <View style={{ borderTopWidth:1,borderBottomWidth:1 ,marginTop: 10}}>
            <Text style={{ fontSize : 22 , color : 'black' ,padding:15,marginTop: -10}}>Hotel Description</Text>
            <Text style={{ fontSize : 18 , color : 'gray',marginTop: -25,padding:15, marginBottom: -5}}>218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore</Text>
        </View>    
    );
}
