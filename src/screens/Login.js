import * as React from "react";
import {
  SafeAreaView,
  View,
  Text,
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
      <SafeAreaView className="flex-1 items-center justify-center ">
        <View className=" w-[80%] bg-white self-center rounded-2xl opacity-80">
          <Text className="font-[600] text-[46px] ml-4 mt-2 mb-2">Login</Text>
          <View className="bg-red-200 w-full flex flex-col">
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
              placeholder="Enter your email"
            />
            <ErrorMessage className="pl-4 text-[17px]"></ErrorMessage>
          </View>
          <View>
            <Text>Forgot password?</Text>
            <TouchableOpacity>
              <Text>Click here</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
