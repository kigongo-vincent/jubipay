import AuthInput from "@/components/AuthInput";
import Submit from "@/components/Submit";
import { theme } from "@/utils/constants";
import { Ionicons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Logo from "@/assets/images/jubilee-logo.png";

const PasswordReset = () => {
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [loading, setLoading] = useState(false);

  const { text, light, primary, grey } = theme;

  const onSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <View
      style={{
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
        padding: 10,
      }}
    >
      <Stack screenOptions={{ headerShown: false }} />

      {/* login component  */}

      <View
        style={{
          width: "100%",
          paddingHorizontal: 20,
          paddingVertical: 20,
          backgroundColor: light,
          shadowColor: "rgba(0,0,0,.2)",
          elevation: 10,
          shadowOffset: { width: 10, height: 10 },
          shadowOpacity: 1,
          alignItems: "center",
          shadowRadius: 10,
        }}
      >
        <Image
          source={Logo}
          style={{ transform: "scale(.5)", borderRadius: 10 }}
        />
        <AuthInput
          value={password2}
          setter={setPassword2}
          placeholder="Enter new password"
          type="password"
        />
        <View style={{ marginVertical: 5 }} />
        <AuthInput
          value={password}
          setter={setPassword}
          placeholder="confirm password"
          type="password"
        />
        <View style={{ marginVertical: 15 }} />
        <Submit fullWidth title="Continue" loading={loading} onSubmit={onSubmit} />
        <View style={{ marginVertical: 15 }} />
        
        
        <Text style={{ textAlign: "center", color: grey }}>&copy; 2024</Text>
      </View>

      {/* end login component  */}
    </View>
  );
};

export default PasswordReset;
