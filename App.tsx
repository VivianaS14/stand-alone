import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";

import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

import { RootParamList } from "./types/Navigation";

import HomeScreen from "./screens/HomeScreen";
import JobsScreen from "./screens/JobsScreen";
import InvoiceScreen from "./screens/InvoiceScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Tab = createBottomTabNavigator<RootParamList>();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#fc336c",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Jobs"
        component={JobsScreen}
        options={{
          tabBarLabel: "Jobs",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="briefcase" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Invoice"
        component={InvoiceScreen}
        options={{
          tabBarLabel: "Invoices",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="layers" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="person" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <PaperProvider>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </PaperProvider>
      <StatusBar style="dark" />
    </>
  );
}
