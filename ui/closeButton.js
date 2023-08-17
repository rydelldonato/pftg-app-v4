import { View, Text, TouchableHighlight, Image,TouchableOpacity } from "react-native";
import React from "react";



export default function closeButton(props) {

  const { modalVisible, setModalVisible} = props;

  return (
    <View>
      <TouchableOpacity underlayColor="transparent" onPress={() => setModalVisible(!modalVisible)}>
        <Image
        style={{ width: 20, height: 20 }}
          source={require("../assets/close.png")}
        />
      </TouchableOpacity>
    </View>
  );
}
