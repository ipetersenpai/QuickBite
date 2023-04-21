import * as React from "react";
import { StatusBar as ExpoStatusbar } from "expo-status-bar";
import { StatusBar, SafeAreaView, View, Image, Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Background() {
  return (
    <SafeAreaView
      className="absolute items-center justify-center bg-[#FFC93C]"
      style={{
        marginTop: StatusBar.currentHeight,
        height: windowHeight,
        width: windowWidth,
      }}
    >
      <View styles={{ width: windowWidth, height: windowHeight }}>
        <Image
          className=" self-end mr-5"
          source={require("./../../assets/fries.png")}
        />
        <Image
          className=" self-start ml-[-20%]"
          source={require("./../../assets/burger.png")}
        />
        <Image
          className="self-end mr-[-20%] mt-[-20%]"
          source={require("./../../assets/pizza.png")}
        />
      </View>

      <View className="relative bg-blue-300 w-full h-[35%]">
        <Image
          className="w-full"
          source={require("./../../assets/style-image.png")}
          resizeMode="stretch"
        />
      </View>
      <ExpoStatusbar backgroundColor="#F9B608" style="light" />
    </SafeAreaView>
  );
}
