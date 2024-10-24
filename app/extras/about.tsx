import { theme } from "@/utils/constants";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import HeaderLeft from "@/components/HeaderLeft";
import HeaderRight from "@/components/HeaderRight";

const Component = () => {
  const { primary, text } = theme;

  return (
    <View style={{ padding: 20, flex: 1, alignItems: "center" }}>
      <StatusBar style="light" />
      {/* <Stack.Screen options={{animation: "fade_from_bottom"}}/> */}
      <Stack.Screen
        options={{
          animation: "fade_from_bottom",
          title: "",
          headerStyle: {
            backgroundColor: primary,
          },
          headerLeft: () => <HeaderLeft />,
          // headerRight: () => <HeaderRight />,
        }}
      />
      <Text style={{ fontWeight: "bold", fontSize: 23, color: primary }}>
        What is this app all about?
      </Text>
      <Text
        style={{
          lineHeight: 22,
          color: text,
          marginTop: 20,
          textAlign: "justify",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, nihil.
        Quae provident labore corrupti hic velit minus laudantium mollitia,
        recusandae accusantium, consequuntur unde natus ipsum dolorem quam
        exercitationem officia dicta facere, magnam quasi? Rerum aut pariatur
        itaque saepe esse eveniet aliquid recusandae temporibus cumque ratione
        accusantium inventore nobis assumenda alias, libero vero aliquam, iste
        cupiditate maxime provident. Quae ipsam aut ex optio inventore! Unde sed
        animi voluptatum illo quis rerum, inventore dolore modi natus! Quidem
        officiis facere deleniti libero temporibus recusandae, exercitationem ex
        ut commodi, tenetur ratione maxime alias dicta similique mollitia, odit
        dolores perferendis dolorum vel accusamus. Vel ipsam tempore accusantium
        culpa consequuntur aspernatur alias a, provident harum quasi, odit, unde
        nihil vero repellat?
      </Text>
    </View>
  );
};
export default Component;
