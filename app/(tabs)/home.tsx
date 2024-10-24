import { theme } from "@/utils/constants";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

const Policy = ({ policy_number }) => {
  const { light, grey, pale, primary, text } = theme;
  return (
    <View
      style={{
        backgroundColor: light,
        borderLeftColor: primary,
        borderLeftWidth: 3,
        padding: 20,
        marginRight: 10,
        borderRadius: 10,
      }}
    >
      <Text
        style={{
          backgroundColor: pale,
          paddingVertical: 10,
          color: text,
          paddingHorizontal: 30,
          borderRadius: 30,
        }}
      >
        {policy_number}
      </Text>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          alignSelf: "flex-end",
          marginTop: 20,
        }}
      >
        <Text style={{ color: primary }}>Pay now</Text>
        <View style={{ marginHorizontal: 4 }} />
        <Ionicons size={20} color={primary} name="arrow-forward" />
      </TouchableOpacity>
    </View>
  );
};

const Fab = () => {
  const { text, light, primary } = theme;
  return (
    <TouchableOpacity
      style={{
        position: "absolute",
        bottom: "5%",
        right: "5%",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          shadowColor: "rgba(0,0,0,.3)",
          elevation: 10,
          shadowOffset: { width: 10, height: 10 },
          shadowOpacity: 1,
          shadowRadius: 10,
          backgroundColor: light,
          padding: 15,
          borderRadius: 100,
          color: text
        }}
      >
        Ask for assistance
      </Text>
      <Ionicons
        name="call"
        style={{
          shadowColor: "rgba(0,0,0,.2)",
          elevation: 10,
          shadowOffset: { width: 10, height: 10 },
          shadowOpacity: 1,
          shadowRadius: 10,
          backgroundColor: primary,
          padding: 15,
          borderRadius: 100,
        }}
        size={20}
        color={light}
      />
    </TouchableOpacity>
  );
};

const Home = () => {
  const { light, grey,text } = theme;

  const [policies, setPolicies] = useState([
    "U878878665555",
    "U775654747474",
    "U223142288383",
  ]);

  return (
    <View style={{ padding: 20, flex: 1 }}>
      <View
        style={{
          shadowColor: "rgba(0,0,0,.2)",
          elevation: 10,
          shadowOffset: { width: 10, height: 10 },
          shadowOpacity: 1,
          shadowRadius: 10,
          backgroundColor: light,
          paddingHorizontal: 20,
          paddingVertical: 30,
          borderRadius: 10,
        }}
      >
        <Text style={{ fontWeight: 600, fontSize: 18, fontFamily: "poppins", color: text }}>
          Good morning, vincent
        </Text>
        <Text style={{ color: grey, lineHeight: 25 }}>
          What would you like to do today
        </Text>
      </View>

      <Text style={{ color: grey, marginTop: 30, fontSize: 13.5 }}>
        Quick payment on running policies
      </Text>
      <View style={{ marginTop: 20 }}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={policies}
          horizontal
          renderItem={({ item }) => <Policy policy_number={item} />}
        />
      </View>

      <Fab />
    </View>
  );
};
export default Home;
