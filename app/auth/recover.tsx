import AuthInput from "@/components/AuthInput";
import Submit from "@/components/Submit";
import { theme } from "@/utils/constants";
import { Ionicons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import { useState } from "react";
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Logo from "@/assets/images/jubilee-logo.png";

const Recover = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { text, light, primary, grey } = theme;

  const onSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.navigate("/auth/reset")
      Alert.alert("Notification", "An OTP  has sent to your email, please provide the code in the text input provided", [{text: "continue"}], )
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
          value={email}
          setter={setEmail}
          placeholder="please provide your email"
          type="email"
        />
        <View style={{ marginVertical: 5 }} />
        <View style={{ marginVertical: 15 }} />
        <Submit fullWidth title="Request OTP" loading={loading} onSubmit={onSubmit} />
        <View style={{ marginVertical: 15 }} />
        <TouchableOpacity
          onPress={() => router?.navigate("/auth/login")}
          style={{ paddingVertical: 10 }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text>Remember my password, </Text>
            <Text style={{ color: primary }}>login</Text>
          </View>
        </TouchableOpacity>
        
      </View>

      {/* end login component  */}
    </View>
  );
};

export default Recover;
