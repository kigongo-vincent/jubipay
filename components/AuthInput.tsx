import { theme } from "@/utils/constants"
import { Ionicons } from "@expo/vector-icons"
import { useState } from "react"
import { TextInput, TouchableOpacity, View } from "react-native"

export interface Props{
    type: string,
    placeholder: string,
    value: string,
    setter: any

}

const AuthInput=(props:Props)=>{
    const {light, primary, text, pale, grey} = theme
    const [seen, setSeen] = useState(false)
    return(
        <View style={{flexDirection: "row", alignItems: "center", backgroundColor: pale, padding: 20, width: "100%"}}>
            <Ionicons color={grey} name={props?.type == "email" ? "mail" : "lock-closed" } size={20} />
            <TextInput 
            secureTextEntry={props?.type == "password" && !seen}
            style={{
                flex:1,
                marginLeft: 10
            }} value={props?.value} onChangeText={props?.setter} placeholder={props?.placeholder}/>
            {
                props?.type == "password"
                &&
                <TouchableOpacity onPress={()=>setSeen(!seen)}>
                    <Ionicons name={seen ? "eye" : "eye-off"} color={grey} size={20}/>
                </TouchableOpacity>
            }
        </View>
    )
}

export default AuthInput