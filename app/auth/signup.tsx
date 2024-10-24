import AuthInput from "@/components/AuthInput";
import Submit from "@/components/Submit";
import { theme } from "@/utils/constants";
import { Ionicons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Logo from "@/assets/images/jubilee-logo.png";
import Input from "@/components/Input";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("")
  const [fullName, setFullName] = useState("")
  const [loading, setLoading] = useState(false);

  const { pale, light, primary, text } = theme;

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
          {/* <Text style={{fontWeight: "bold",color:text , fontSize: 20, marginBottom: 30}}>Signup</Text> */}
        <Input
          value={fullName}
          setter={setFullName}
          placeholder="Enter your full name"
          type=""
        />
          <View style={{ marginVertical: 5 }} />
        <Input
          value={phoneNumber}
          setter={setPhoneNumber}
          placeholder="Enter your phone number"
          type=""
        />
          <View style={{ marginVertical: 5 }} />
        <Input
          value={email}
          setter={setEmail}
          placeholder="please provide your email"
          type="email"
        />
        <View style={{ marginVertical: 5 }} />
        <Input
          value={password}
          setter={setPassword}
          placeholder="create a password"
          type="password"
        />
        <View style={{ marginVertical: 15 }} />
        <Submit fullWidth title="Signup" loading={loading} onSubmit={onSubmit} />
        <View style={{ marginVertical: 15 }} />
        <TouchableOpacity onPress={()=>router?.navigate("/auth/login")} style={{ paddingVertical: 10 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text>Already have an account, </Text>
            <Text style={{ color: primary }}>Signin</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* end login component  */}
    </View>
  );
}

export default Signup;
