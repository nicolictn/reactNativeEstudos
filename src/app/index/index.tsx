/*Importando elementos do RN*/
import { View, Image, TouchableOpacity} from "react-native"
//Biblioteca de ícones: https://icons.expo.fyi/Index
import { MaterialIcons } from "@expo/vector-icons"

import { colors } from "@/styles/colors"
import { styles } from "./styles"

//importado de outro arquivo
import { Category } from "@/components/category"

//para "rotas", é obrigatório o uso do "default"
export default function Index() {
    return (
        //<> é chamado de fragment. ele indica que há apenas um retorno, porém com vários elementos.
        //View = é como se fosse uma div.
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("@/assets/logo.png")} style={styles.logo}/>

                {/* TouchableOpacity = efeito visual de opacidade, ao clicar no botão */}
                <TouchableOpacity activeOpacity={0.8}>
                    <MaterialIcons name="add" size={32} color={colors.green[300]} />
                </TouchableOpacity>
            </View>

            <Category />
        </View>
    )
}

