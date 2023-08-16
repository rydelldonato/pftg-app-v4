import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import * as Animatable from "react-native-animatable"; // Import Animatable
import CloseButton from "../../closeButton";
import { Button } from "react-native";

export default function MenuItemModal(props) {
  const { modalVisible, setModalVisible, selectedItem } = props;
  return (
    <View>
      <Modal
        backdropOpacity={0.7}
        backdropTransitionInTiming={400}
        backdropTransitionOutTiming={400}
        isVisible={modalVisible}
        animationIn="bounceIn"
        animationOut="bounceOut"
        animationInTiming={400}
        animationOutTiming={400}
      >
        <Animatable.View
          style={styles.modalContainer}
          animation="bounceIn"
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
          {selectedItem && (
            <Animatable.View
              style={styles.modalContent}
              animation="fadeIn"
              delay={300}
            >
              <Text>{selectedItem.name}</Text>
              <Text>{selectedItem.price}</Text>
              <Image
                style={{ width: "50%", height: "50%" }}
                source={selectedItem.image} // Assuming you have the image source in the item object
              />
              {/* ... (other item details) */}
            </Animatable.View>
          )}
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
    top: 260,
    right: 265,
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
