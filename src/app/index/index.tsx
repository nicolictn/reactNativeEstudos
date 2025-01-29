/*npx expo start*/

/*Requisito de componente = deve ser reutilizada a estrutura, usada como padrão ou um elemento grande.*/

/*Importando elementos do RN*/
import { View, Image, TouchableOpacity} from "react-native"
//Biblioteca de ícones: https://icons.expo.fyi/Index
import { MaterialIcons } from "@expo/vector-icons"

import { colors } from "@/styles/colors"
import { styles } from "./styles"

//importação da lista de categorias
import { categories } from "@/utils/categories"

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

            {/* NESSE CASO, DEFINIR NAME E ICON PROPORCIONA A UTILIZAÇÃO DE PROPRIEDADES DE MANEIRA INDIVIDUAIS, MAS COM COMPONENTES REUTILIZÁVEIS. */}
            {/* coloque o nome da lista e da posição da propriedade. */}
            <Category 
                name={categories[0].name} 
                icon={categories[0].icon} 
                isSelected 
            /> 

            <Category name="Site" icon="language" isSelected={false}  />
            <Category name="Video" icon="movie" isSelected={false} />
        </View>
    )
}

