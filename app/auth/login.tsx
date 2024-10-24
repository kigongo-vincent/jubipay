import AuthInput from "@/components/AuthInput";
import Submit from "@/components/Submit";
import { theme } from "@/utils/constants";
import { Ionicons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Logo from "@/assets/images/jubilee-logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { text, light, primary, grey } = theme;

  const onSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.navigate("/(tabs)/home")
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
          shadowRadius: 10,
          alignItems: "center",
        }}
      >
        <Image
          source={Logo}
          style={{ transform: "scale(.5)", borderRadius: 10 }}
        />
        <AuthInput
          value={email}
          setter={setEmail}
          placeholder="please provide your email"
          type="email"
        />
        <View style={{ marginVertical: 5 }} />
        <AuthInput
          value={password}
          setter={setPassword}
          placeholder="enter your password"
          type="password"
        />
        <View style={{ marginVertical: 15 }} />
        <Submit fullWidth title="Login" loading={loading} onSubmit={onSubmit} />
        <View style={{ marginVertical: 15 }} />
        <TouchableOpacity
          onPress={() => router?.navigate("/auth/signup")}
          style={{ paddingVertical: 10 }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text>Don't have an account, </Text>
            <Text style={{ color: primary }}>Signup</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router?.navigate("/auth/recover")}
          style={{ paddingVertical: 10 }}
        >
          <View
            style={{
              marginVertical: 30,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: grey }}>Did you forget your password, </Text>
            <Text style={{ color: text, textDecorationLine: "underline" }}>
              recover account
            </Text>
          </View>
        </TouchableOpacity>
        <Text style={{ textAlign: "center", color: grey }}>&copy; 2024</Text>
      </View>

      {/* end login component  */}
    </View>
  );
};

export default Login;
