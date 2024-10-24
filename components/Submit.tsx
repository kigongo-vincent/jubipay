import { theme } from "@/utils/constants";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

export interface Props {
  title: string;
  loading?: boolean;
  onSubmit: any;
  fullWidth?: boolean
}

const Submit = (props: Props) => {
  const { primary } = theme;

  return (
    <TouchableOpacity
      onPress={props?.onSubmit}
      style={{
        backgroundColor: primary,
        padding: 20,
        shadowColor: "rgba(0,0,0,.5)",
        elevation: 10,
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 10,
        borderRadius: 5,
        alignItems: "center",
        width: props?.fullWidth ? "100%" : "auto"
      }}
    >
      {
        props?.loading
        ?
        <ActivityIndicator size={20} color={"aliceblue"}/>
        :
        <Text style={{ color: "aliceblue" }}>{props?.title}</Text>
      }
    </TouchableOpacity>
  );
};

export default Submit;
