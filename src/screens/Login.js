import * as React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  Text as ErrorMessage,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Background from "../components/Background";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Login() {
  return (
    <>
      <Background />
      <SafeAreaView className="flex-1 items-center">
        <View className=" w-[80%] bg-white rounded-2xl mt-[45%] opacity-80">
          <Text className="font-[600] text-[46px] ml-4 mt-2 mb-2">Login</Text>
          <View className=" w-full flex flex-col">
            <Text className="pl-4 text-[17px]">Email</Text>
            <TextInput
              className="bg-white mx-auto w-[90%] h-10 p-2 rounded-lg"
              placeholder="Enter your email"
            />
            {false ? (
              <ErrorMessage className="pl-4 text-[17px]">
                error man oy
              </ErrorMessage>
            ) : (
              <View className="mt-2" />
            )}

            <Text className="pl-4 text-[17px]">Password</Text>
            <TextInput
              className="bg-white mx-auto w-[90%] h-10 p-2 rounded-lg"
              placeholder="Enter your Password"
            />
            <ErrorMessage className="pl-4 text-[17px]"></ErrorMessage>
          </View>
          <View className="flex flex-row mx-auto my-2">
            <Text>Forgot password?</Text>
            <TouchableOpacity>
              <Text className="text-[#419aff]"> Click here</Text>
            </TouchableOpacity>
          </View>
          <View className="flex flex-row mt-4 self-end mr-4 mb-5">
            <TouchableOpacity className="w-[115px] bg-black h-[37px] justify-center mx-2 rounded-lg">
              <Text className="text-white font-[450] mx-auto text-[25px]">
                Sign Up
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="w-[85px] bg-[#F1BB2D] h-[37px] justify-center rounded-lg">
              <Text className="text-white font-[450] mx-auto text-[25px]">
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
