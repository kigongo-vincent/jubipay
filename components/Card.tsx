import { theme } from "@/utils/constants"
import { Text, View } from "react-native"

export interface Props{
    icon: any,
    title: string,
    count: number
}

const Card =(props: Props)=>{

    const {primary, light, pale, text} = theme

    return(
        <View
        style={{
            padding: 20,
            borderRadius: 10,
            shadowColor: "rgba(0,0,0,.2)",
            shadowOpacity: 1,
            shadowOffset: {width: 10, height: 10},
            shadowRadius: 20,
            elevation: 20,
            flexDirection: "row"
        }}
        >
            <Text>card</Text>
        </View>
    )
}

export default Card