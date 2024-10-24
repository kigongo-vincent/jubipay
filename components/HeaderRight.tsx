import { theme } from "@/utils/constants"
import { Ionicons } from "@expo/vector-icons"
import { router } from "expo-router"
import { Text, TouchableOpacity, View } from "react-native"

const Component=()=>{

    const {primary, pale} = theme

    return(
        <TouchableOpacity 
        onPress={()=>router?.navigate("/extras/about")}
        style={{
            backgroundColor: pale,
            height: 30,
            width: 30,
            borderRadius: 15,
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Ionicons name="information" color={primary} size={20}/>
        </TouchableOpacity>
    )

}
export default Component