import { View, Text, TouchableHighlight, Image } from "react-native";
import React from "react";



export default function closeButton(props) {

  const { modalVisible, setModalVisible} = props;

  return (
    <View>
      <TouchableHighlight underlayColor="transparent" onPress={() => setModalVisible(!modalVisible)}>
        <Image
          source={require("../assets/close.png")}
        />
      </TouchableHighlight>
    </View>
  );
}
