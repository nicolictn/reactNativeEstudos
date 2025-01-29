//TÓPICO: Criando o componente Category

import { Text, Pressable } from "react-native"
//pressable = efeito visual, mas não é de opacidade.
import { MaterialIcons } from "@expo/vector-icons"

import { colors} from "@/styles/colors"
import { styles } from "./styles"

//export default function Category() -> nesse caso o DEFAULT (padrão) não é utilizado para que a importação do componente seja feita de maneira organizada, apenas com o próprio nome dele (CATEGORY)
export function Category() {
    return (
        <Pressable>
            <MaterialIcons name="code" size={16} color={colors.gray[400]} />
            <Text style={styles.name}>Projetos</Text>
        </Pressable>
    )
}

//para utilizar esse componente, é necessário importá-lo no arquivo principal.