import Submit from "@/components/Submit";
import { theme } from "@/utils/constants";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { ScrollView, Switch, Text, TextInput, View } from "react-native";

const PremiumPayment = () => {
  return (
    <View>
      <Text>Premium payment</Text>
    </View>
  );
};

const FirstPremiumPayment = () => {
  const { light, pale, primary, text, grey } = theme;
  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <View style={{ marginTop: 30 }}>
      <Text style={{ color: primary, fontWeight: "bold", fontSize: 20 }}>
        First premium payment
      </Text>
      <Text style={{ color: text, lineHeight: 30 }}>
        Please provide your phone number
      </Text>
      <View
        style={{
            marginBottom:15,
          flexDirection: "row",
          alignItems: "center",
          padding: 20,
          shadowColor: "rgba(0,0,0,.2)",
          shadowOpacity: 1,
          shadowOffset: { width: 10, height: 10 },
          shadowRadius: 20,
          elevation: 20,
          borderRadius: 5,
          marginTop: 10,
          backgroundColor: light,
        }}
      >
        <Ionicons size={20} color={grey} name="call" />
        <TextInput style={{ marginLeft: 10 }} placeholder="+256 XXX-XXX-XXX" />
      </View>
      <Submit
        title="Continue"
        fullWidth
        loading={loading}
        onSubmit={onSubmit}
      />
    </View>
  );
};

const Component = () => {
  const { light, primary, pale, text } = theme;
  const [makePremiumPayment, setMakePremiumPayment] = useState(false);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View
        style={{
          backgroundColor: light,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 20,
          shadowColor: "rgba(0,0,0,.2)",
          shadowOpacity: 1,
          shadowOffset: { width: 10, height: 10 },
          shadowRadius: 20,
          elevation: 20,
          borderRadius: 10,
        }}
      >
        <Text>This my first premium payment</Text>
        <Switch
          onValueChange={(value) => setMakePremiumPayment(value)}
          value={makePremiumPayment}
        />
      </View>

      {makePremiumPayment ? <FirstPremiumPayment /> : <PremiumPayment />}
    </View>
  );
};
export default Component;
