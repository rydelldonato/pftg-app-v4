import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import * as Animatable from "react-native-animatable"; // Import Animatable
import CloseButton from "../../closeButton";

export default function MenuItemModal(props) {
  const { modalVisible, setModalVisible } = props;

  return (
    <View>
      <Modal
        backdropOpacity={0.7}
        backdropTransitionInTiming={400}
        backdropTransitionOutTiming={400}
        isVisible={modalVisible} // "visible" prop is changed to "isVisible"
        animationIn="bounceIn" // Change the animation names
        animationOut="bounceOut"
        animationInTiming={400} // Adjust the timing as per your preference
        animationOutTiming={400}
      >
        <Animatable.View // Use Animatable.View
          style={styles.modalContainer}
          animation="bounceIn" // Animation for the modal content
        >
          <Animatable.View
            style={styles.closeButton}
            animation="fadeIn"
            delay={500}
          >
            <CloseButton
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
            />
          </Animatable.View>
          <Animatable.View
            style={styles.modalContent}
            animation="fadeIn"
            delay={300}
          >
            <Text>menuItemModal</Text>
          </Animatable.View>
        </Animatable.View>
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
  closeButton: {
    position: "absolute",
    zIndex: 1,
    top: 310,
    right: 244,
  },
});
