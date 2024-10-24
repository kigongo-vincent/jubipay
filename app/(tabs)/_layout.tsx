import { theme } from "@/utils/constants";
import { Ionicons } from "@expo/vector-icons";
import { Stack, Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";

const TabsLayout = () => {
  const { primary } = theme;
  return (
    <>
      <StatusBar style="light" animated/>
      <Tabs
        screenOptions={{
          headerShown: false,
          headerTitle: "",
          headerTintColor: primary,
          tabBarActiveTintColor: primary,
          tabBarStyle: {
            height: 80,
            paddingBottom: 20,
            paddingTop: 10,
          },
          tabBarLabelStyle: {
            fontWeight: 600,
            fontSize: 10,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="payments"
          options={{
            title: "transact",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="card" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="orders"
          options={{
            title: "standing orders",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="bookmark" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="history"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="list-circle" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
