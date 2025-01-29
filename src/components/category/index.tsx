//TÓPICO: Criando o componente Category


import { Text, Pressable, PressableProps } from "react-native"
//pressable = efeito visual, mas não é de opacidade.
import { MaterialIcons } from "@expo/vector-icons"

import { colors} from "@/styles/colors"
import { styles } from "./styles"

//a tipagem nomeada PROPS é igual ao PressableProps E todos as propriedades abaixo
type Props = PressableProps & {
    name: string
    icon: keyof typeof MaterialIcons.glyphMap //especifica quais ícones devem ser utilizados como parâmetro
}

//export default function Category() -> nesse caso o DEFAULT (padrão) não é utilizado para que a importação do componente seja feita de maneira organizada, apenas com o próprio nome dele (CATEGORY)

//Spread Operator = ...rest = pega todas as outras propriedades que não foram citadas
export function Category({ name, icon, ...rest }: Props) {
    // props = parâmetro/propriedade a ser usado para propriedades individuais, de componentes reutilizáveis.
    return (
        //estrutura do componente
        <Pressable style={styles.container} {...rest } >
            <MaterialIcons name={icon} size={16} color={colors.gray[400]} />
            <Text style={styles.name}>{name}</Text>
        </Pressable>
    )
}

//para utilizar esse componente, é necessário importá-lo no arquivo principal.

//a vantagem de se utilizar um componente, é que pode ser reutilizado.