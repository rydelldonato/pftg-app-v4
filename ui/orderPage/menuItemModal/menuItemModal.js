import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import Modal from "react-native-modal";
import * as Animatable from "react-native-animatable"; // Import Animatable
import CloseButton from "../../closeButton";

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
          style={styles.closeButton}
          animation="fadeIn"
          delay={500}
        >
          <CloseButton
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        </Animatable.View>
        <Animatable.View style={styles.modalContainer} animation="bounceIn">
          {selectedItem && (
            <Animatable.View
              style={styles.modalContent}
              animation="fadeIn"
              delay={300}
            >
              <View>
                <Text style={styles.itemName}>{selectedItem.name}</Text>
                <Text style={styles.itemPrice}>{selectedItem.price}</Text>
              </View>
              <Image
                style={{ width: "100%", height: "50%" }}
                source={selectedItem.image} // Assuming you have the image source in the item object
              />
              <Text style={styles.itemDescription}>
                {selectedItem.description}
              </Text>
              {/* ... (other item details) */}
            </Animatable.View>
          )}
          <Animatable.View
            style={{ width: 247 }}
            animation="rubberBand"
            iterationCount="infinite" // Make the animation infinite
            iterationDelay={1000} // Delay between each iteration
          >
            <TouchableOpacity
              style={styles.customButton} // Apply custom button style
              onPress={() => {
                const url = `https://www.doordash.com/store/peachy's-food-to-go-llc-stockton-24686955/?event_type=autocomplete&pickup=false`;
                Linking.openURL(url).catch((err) =>
                  console.error("An error occurred", err)
                );
              }}
            >
              <Text style={styles.buttonTitle}>Order Now Through Doordash</Text>
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
    width: 247,
    height: 300,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
    paddingTop: 30,
  },
  closeButton: {
    position: "absolute",
    zIndex: 1,
    top: 230,
    right: 275,
  },
  customButton: {
    backgroundColor: "#FAEDCD", // Customize button background color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonTitle: {
    fontSize: 15, // Adjust the font size as needed
    color: "black", // Customize text color
    textAlign: "center",
    fontFamily: "Montserrat_600SemiBold",
  },
  itemName: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 20,
  },
  itemPrice: {
    fontFamily: "Montserrat_400Regular",
    margin: 5,
  },
  itemDescription: {
    fontFamily: "Montserrat_400Regular",
    margin: 5,
  },
});
