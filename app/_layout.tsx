import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import HeaderLeft from "@/components/HeaderLeft";
import HeaderRight from "@/components/HeaderRight";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { theme } from "@/utils/constants";
import { StatusBar } from "expo-status-bar";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const { primary, light } = theme;

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <StatusBar style="dark"/>
      <Stack>
        <Stack.Screen
          name="(tabs)"
        
          options={{
            title: "",
            headerStyle:{
backgroundColor: primary
            },
            headerLeft: () => <HeaderLeft />,
            headerRight: () => <HeaderRight />,
          }}
        />
        <Stack.Screen name="auth/login" options={{ headerShown: false }} />
        <Stack.Screen name="auth/signup" options={{ headerShown: false }} />
        <Stack.Screen name="auth/reset" options={{ headerShown: false }} />
        <Stack.Screen name="auth/recover" options={{ headerShown: false }} />
        <Stack.Screen
          name="auth/password_reset"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
