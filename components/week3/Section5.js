import React from 'react';
import { Image, Text, View } from 'react-native';
import MyIcon from "./MyIcon";

export default function Section5() {
    return (
        <View style={{ borderBottomWidth:1 }}>
                <View style={{ flexDirection : "row", marginTop : 10,marginBottom:10 }}>
                    <MyIcon title="wifi" name="wifi" size={30} color="#666666" />
                    <MyIcon title="coffee" name="coffee" size={30} color="#666666" />
                    <MyIcon title="bath" name="bath" size={30} color="#666666" />
                    <MyIcon title="car" name="car" size={30} color="#666666" />
                    <MyIcon title="paw" name="paw" size={30} color="#666666" />
                </View>
        </View>    
    );
}
