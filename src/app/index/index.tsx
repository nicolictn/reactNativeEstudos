/*Importando elementos do RN*/
import { View, Image } from "react-native"

//https://icons.expo.fyi/Index
import { MaterialIcons } from "@expo/vector-icons"

import { styles } from "./styles"

export default function Index() {
    return (
        //<> é chamado de fragment. ele indica que há apenas um retorno, porém com vários elementos.
        //View = é como se fosse uma div.
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("@/assets/logo.png")} style={styles.logo}/>
            </View>
        </View>

        
    )
}

