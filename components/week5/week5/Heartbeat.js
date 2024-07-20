import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import MyIcon from "../../week3/MyIcon";


export default function Heartbeat() {
    const [count, setCount] = useState(0);
    const onPressButton1 = () => {
        setCount(count + 1);;
    }
    return (
        <View>
            <View style={{ flexDirection: "row", marginVertical: 20 }}>
    <TouchableOpacity onPress={onPressButton1}>
        <View style={{ padding: 20, borderRadius: 40 }}>
            <Text style={{ fontSize: 30, textAlign: "center", color: 'white' }}>
            <MyIcon name='heart' size={50} color='orange'  />
            </Text>
        </View>
    </TouchableOpacity>
    <View
          style={{ margin:20

          }}
        >
          <Text style={{ fontSize: 20 }}>{count}</Text>
        </View>
    </View>
        </View>
    );
}