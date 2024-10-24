import { Image, Text, View } from "react-native"
import Logo from "@/assets/images/jubilee-logo.png";

const Component=()=>{

    return(
        <View>
            <Image style={{width: 80, height: 40, objectFit: "contain"}} source={Logo}/>
        </View>
    )

}
export default Component