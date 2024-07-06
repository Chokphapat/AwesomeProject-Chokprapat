import React from "react";
import { Image, Text, View } from "react-native";

export default function Section6() {
  return (
    <View style={{ padding:20,borderBottomWidth:1}}>
      <Text style={{ fontSize: 22, color: "black",marginTop: -12}}>
        Location
      </Text>
      <Text
        style={{ fontSize: 18, color: "gray", marginTop: 5}}
      >
        218 Austen Mountain, consectetur adipiscing, sed do eiusmod 
      </Text>
      <Text
        style={{ fontSize: 18, color: "gray", marginBottom: 5 }}
      >
        tempor incididunt ut labore et…
      </Text>
      <View style={{ flexDirection : "row"}}>
                <Image style={{ flex : 1 , resizeMode : "cover", aspectRatio : 8/2 , marginBottom: -5}} source={require("../../assets/week3/map.jpg")} />
            </View>
    </View>
  );
}
