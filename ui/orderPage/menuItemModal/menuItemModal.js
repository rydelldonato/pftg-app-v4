import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import * as Animatable from "react-native-animatable"; // Import Animatable
import CloseButton from "../../closeButton";
import { Button } from "react-native";

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
            <Text>FoodItem</Text>
            <Text>price</Text>
            <View style={{ width: "100%", height: "100%" }}>
              <Image
                style={{ width: "100%", height: "100%" }}
                source={require("../../../assets/lumpia.png")}
              />
            </View>
            <Text>Ingredients</Text>
            <Animatable.View
              style={{width: 247 }}
              animation="rubberBand"
              iterationCount="infinite" // Make the animation infinite
              iterationDelay={1000} // Delay between each iteration
            >
              <TouchableOpacity
                style={styles.customButton} // Apply custom button style
                onPress={() => {
                  // Handle button press here
                }}
              >
                <Text style={styles.buttonTitle}>
                  Order Now Through Doordash
                </Text>
              </TouchableOpacity>
            </Animatable.View>
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
    width:247,
    height: 300,
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
  customButton: {
    backgroundColor: "#007BFF", // Customize button background color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonTitle: {
    fontSize: 15, // Adjust the font size as needed
    color: "white", // Customize text color
    textAlign: "center",
  },
});
