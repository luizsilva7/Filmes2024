import React from "react";
import { Text, StyleSheet, View, Image, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Details from '../screens/Details';


export default function Routes() {
  const stack = createStackNavigator();

  return (
    
      <stack.Navigator>
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name='Details' component={Details} />
      </stack.Navigator>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141a29",
    alignItems: "center",
  },
});