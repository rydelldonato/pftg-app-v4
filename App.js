import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Welcome from "./pages/welcome-page/welcome";
import GeneralFooter from "./ui/generalFooter/generalFooter";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./pages/home-page/homePage";
import OrderPage from "./pages/order-page/orderPage";
import DealsPage from "./pages/deals-page/dealsPage";
import MorePage from "./pages/more-page/morePage";
import Sisig from "./pages/menu-categories/sisig/sisig";
import Sandwiches from "./pages/menu-categories/sandwiches/sandwiches";
import Lumpia from "./pages/menu-categories/lumpia/lumpia";
import PeachysCombo from "./pages/menu-categories/peachysCombo/peachysCombo";
import Dessert from "./pages/menu-categories/dessert/dessert";
import Beverages from "./pages/menu-categories/beverages/beverages";
import Locations from "./pages/locations-page/locations";
import ContactPage from "./pages/contact-page/contactPage";
import Profile from "./pages/profile-page/profile";
import PersonalSettings from "./pages/personal-settings-page/personalSettings";
import DeliveryInfoPage from "./pages/delivery-info-page/deliveryInfoPage";
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';


const Stack = createNativeStackNavigator();

// const firebaseConfig = {
//   apiKey: "AIzaSyBnMUbQpsCU7gnxfp7OSGrB8xJM58mizpw",
//   authDomain: "peachy-s-food-to-go-app.firebaseapp.com",
//   databaseURL: "https://peachy-s-food-to-go-app-default-rtdb.firebaseio.com",
//   projectId: "peachy-s-food-to-go-app",
//   storageBucket: "peachy-s-food-to-go-app.appspot.com",
//   messagingSenderId: "1079556604883",
//   appId: "1:1079556604883:web:58b44aa27f50cf00d5e526",
// };

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }
export default function App() {
  const [currentPage, setCurrentPage] = useState("Welcome");

  // Function to hide the footer on certain pages
  const shouldShowFooter = (routeName) => {
    return !(routeName === "Welcome" || routeName === "Review and Pay");
  };
  
  return (
    <>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={({ route }) => ({
              headerShown: false,
              gestureEnabled: false,
            })}
          >
            <Stack.Screen name="Welcome">
              {() => <Welcome setCurrentPage={setCurrentPage} />}
            </Stack.Screen>
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="Order" component={OrderPage} />
            <Stack.Screen name="Sisig" component={Sisig} />
            <Stack.Screen name="Sandwiches" component={Sandwiches} />
            <Stack.Screen name="Lumpia" component={Lumpia} />
            <Stack.Screen name="Peachy's Combo" component={PeachysCombo} />
            <Stack.Screen name="Dessert" component={Dessert} />
            <Stack.Screen name="Beverages" component={Beverages} />
            <Stack.Screen name="Deals" component={DealsPage} />
            <Stack.Screen name="More" component={MorePage} />
            <Stack.Screen name="Locations" component={Locations} />
            <Stack.Screen name="Contact" component={ContactPage} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="DeliveryInfoPage" component={DeliveryInfoPage} />
            <Stack.Screen
              name="Personal Settings"
              component={PersonalSettings}
            />
          </Stack.Navigator>

          {shouldShowFooter(currentPage) && <GeneralFooter />}
          <StatusBar style="auto" />
        </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
