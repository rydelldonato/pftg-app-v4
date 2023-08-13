import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Modal from "react-native-modal";

export default function menuItemModal(props) {
  const { modalVisible } = props;

  return (
    <View>
      <Modal
        backdropOpacity={0.7}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={1000}
        animationIn="zoomIn"
        animationOut="zoomOut"
        visible={modalVisible}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>menuItemModal</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0)", // Semi-transparent background
  },
  modalContent: {
    width: 200,
    height: 200,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
  },
});
