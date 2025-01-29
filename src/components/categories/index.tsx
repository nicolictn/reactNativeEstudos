import { FlatList } from "react-native";
//flatlist = componente que renderiza listas no rn

import { styles } from "./styles";
import { categories } from "@/utils/categories";
import { Category } from "@/components/category";

//sempre crie com a letra maiúscula e sempre deve conterum retorno
export function Categories(){
    return (
        <FlatList
            //especifica qual lista será renderizada
            data={categories}
            //qual parâmetro/chave único será utilizado como identificação
            keyExtractor = {(item) => item.id}
            //qual componente que será renderizado para cada item da lista
            renderItem={({ item }) => (
                <Category name={item.name} icon={item.icon} isSelected={false} />
            )}
            horizontal //é uma estilização
            style={styles.container} //referencia a estilização feita no arquivo styles.
            contentContainerStyle={styles.content}
            showsHorizontalScrollIndicator={false} //desabilita a barrinha de scroll 
        />
    )
}