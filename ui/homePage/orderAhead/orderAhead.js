import {
  View,
  Text,
  Image,
  TouchableHighlight,
  Dimensions,
  Linking,
} from "react-native";
import React from "react";
import styles from "./styles";
import {
  useFonts,
  K2D_400Regular,
  K2D_600SemiBold,
} from "@expo-google-fonts/k2d";
import {
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
const { width } = Dimensions.get("window");

export default function OrderAhead() {
  const handleOrderNowButton = () => {
    const url = `https://www.doordash.com/store/peachy's-food-to-go-llc-stockton-24686955/?event_type=autocomplete&pickup=false`;
    Linking.openURL(url).catch((err) =>
      console.error("An error occurred", err)
    );
  };
  let [fontsLoaded] = useFonts({
    K2D_400Regular,
    K2D_600SemiBold,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#E9ECE6",
          width: Number(width),
          borderColor: "black",
          borderWidth: 0.5,
          height: 164,
          shadowColor: "black",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.3,
          shadowRadius: 2,
          elevation: 2,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            marginLeft: 23,
            marginTop: 25,
          }}
        >
          <Text
            style={{
              fontFamily: "Montserrat_600SemiBold",
              marginBottom: 3,
              fontSize: 15,
            }}
          >
            Order Ahead
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat_700Bold",
              lineHeight: 21,
              fontSize: 20,
              width: 136,
              marginBottom: 2,
            }}
          >
            Pickup & Delivery
          </Text>
          <Text style={{ fontFamily: "Montserrat_400Regular", fontSize: 13 }}>
            With Doordash
          </Text>
        </View>
        <View style={{ marginTop: 29, marginRight: 14, alignItems: "center" }}>
          <Image source={require("../../../assets/doordashTitle.png")} />
          <Image
            style={{ width: "100%", height: "80%" }}
            source={require("../../../assets/sisigFries.png")}
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            position: "absolute",
            marginTop: 115,
            marginLeft: 30,
          }}
        >
          <View style={{}}>
            <TouchableHighlight
              onPress={handleOrderNowButton}
              style={{
                width: 154,
                height: 32,
                borderWidth: 1,
                borderRadius: 7,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#E9ECE6",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.35,
                shadowRadius: 3.84,
                elevation: 5,
              }}
            >
              <Text
                style={[
                  styles.buttontext,
                  {
                    fontFamily: "K2D_400Regular",
                    textAlign: "center",
                    fontSize: 15,
                  },
                ]}
              >
                Order Now
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </View>
  );
}
