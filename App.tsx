import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import {
  Button,
  extendTheme,
  Icon,
  NativeBaseProvider,
  VStack,
} from "native-base";
import React from "react";
import "react-native-gesture-handler";
import CountScreen from "./app/screens/count-screen";
import { Ionicons, AntDesign } from "@expo/vector-icons";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

export const theme = extendTheme({ config });
type MyThemeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen
            name="Counter"
            options={{
              headerTintColor: "white",
              headerStyle: { backgroundColor: "#053C63" },
              headerRight: () => (
                <VStack
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="flex-end"
                >
                  <Button
                    size="xs"
                    leftIcon={
                      <Icon as={Ionicons} color="white" name="search" />
                    }
                    variant="ghost"
                  />
                  <Button
                    size="xs"
                    leftIcon={
                      <Icon as={AntDesign} color="white" name="filter" />
                    }
                    variant="ghost"
                  />
                  <Button
                    size="xs"
                    leftIcon={
                      <Icon
                        as={Ionicons}
                        color="white"
                        name="settings-outline"
                      />
                    }
                    variant="ghost"
                  />
                </VStack>
              ),
            }}
          >
            {() => <CountScreen />}
          </Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
