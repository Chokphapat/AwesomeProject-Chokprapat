import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text } from "react-native";

export default function Section2() {
  return (
    <View>
      
      <View
      style={{
        marginTop: -70,
        padding: 10,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 20,
        backgroundColor: "#F5F5F5",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal:30

      }}
    >
      <View>
        <Text
          style={{
            fontSize: 20,
            color: "black",
            textAlign: "center", 
          }}
        >
          Hilton San Francisco
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <FontAwesome name="star" size={20} color="orange" />
          <FontAwesome name="star" size={20} color="orange" />
          <FontAwesome name="star" size={20} color="orange" />
          <FontAwesome name="star" size={20} color="orange" />
          <FontAwesome name="star-half" size={20} color="orange" />
        </View>
      </View>

      <View>
        <Text
          style={{
            fontSize: 20,
            color: "black",
            textAlign: "center",
            marginBottom: 10
          }}
        >
          Facilities provided may range from a modest quality mattress in a
          small room to large suites
        </Text>
      </View>
    </View>
    </View>
  );
}
