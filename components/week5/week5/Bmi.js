import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native";

export default function Bmi() {
  const [weight, setWeight] = useState("70");
  const [height, setHeight] = useState("170");
  const [bmi, setBmi] = useState("0");
  const [newdescription,setdescription] = useState("Normal");
  

  console.log("STATE : ", weight, height, bmi,newdescription);

  const onPressButton = () => {
    console.log("Calculate button is pressed!!!");
    let thisBMI = (weight/ (height/100 * height/100));
    setBmi(thisBMI.toFixed(2));
    console.log(bmi);
    // console.log(output);
    console.log(thisBMI);
    
    let description = "Normal";
        if (thisBMI<18.5)
                description ="Underweight";
        else if (thisBMI>=18.5 && thisBMI<=24.99)
                description ="Normal";
        else if (thisBMI>=25 && thisBMI<=29.99)
                description ="Overweight!";
        else if (thisBMI>=30 && thisBMI<=34.9)
                description ="Obese";
        else
                description ="extremely";
    setdescription(description);



};


  return (
    <View>
      {/* แถวที่ 1 */}
      <View
        style={{
          backgroundColor: "white",
          justifyContent: "center",
          padding: 20,
          marginTop: -20,
          borderRadius: 10,
          height: 100,
          marginVertical: 10,
        }}
      >
        <Text style={{ fontSize: 25 }}>Weight (kg.)</Text>
        <TextInput
          placeholder="Input your weight"
          style={{ fontSize: 20 }}
          keyboardType="numeric"
          value={weight}
          onChangeText={ (newWeight) => setWeight(newWeight) }
        />
      </View>
      {/* แถวที่ 2 */}
      <View
        style={{
          backgroundColor: "white",
          justifyContent: "center",
          padding: 20,
          marginTop: 5,
          borderRadius: 10,
          height: 100,
          marginVertical: 10,
        }}
      >
        <Text style={{ fontSize: 25 }}>Height (cm.)</Text>
        <TextInput
          placeholder="Input your height"
          style={{ fontSize: 20 }}
          keyboardType="numeric"
          value={height}
          onChangeText={ (newHeight) => setHeight(newHeight) }
        />
      </View>
      {/* แถวที่ 3 */}
      <View style={{ flexDirection: "row", marginVertical: 20 }}>
        <View
          style={{
            backgroundColor: "white",
            flex: 1,
            borderRadius: 10,
            height: 100,
            justifyContent: "center",
            alignItems: "center",
            marginRight: 10,
          }}
        >
          <Text style={{ fontSize: 20 }}>{bmi}</Text>
        </View>
        <View
          style={{
            backgroundColor: "white",
            flex: 1,
            borderRadius: 10,
            height: 100,
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 10,
          }}
        >
          <Text style={{ fontSize: 20 }}>{newdescription}</Text>
        </View>
      </View>
      {/* แถวที่ 4 */}
      {/* <Button title="Calculate" onPress={ onPressButton } /> */}
      <TouchableOpacity onPress={onPressButton}>
        <View style={{ padding: 20, backgroundColor: "blue", borderRadius: 40 }}>
            <Text style={{ fontSize: 30, textAlign: "center", color: 'white' }}>
                Calculate
            </Text>
        </View>
    </TouchableOpacity>
{/* 
ก้อนหัวใจ */}
    
    </View>
  );
}
