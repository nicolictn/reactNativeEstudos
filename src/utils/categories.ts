//Trabalhando com a lista de categorias
//pasta util - utilizada para compartilhar componentes dentro do aplicativo.

/*IMPORTAÇÕES*/
import { MaterialIcons } from "@expo/vector-icons"

//definição de quais propriedades DEVEM conter em cada categoria listada
type Category = {
    id: string
    name: string
    icon: keyof typeof MaterialIcons.glyphMap
}

//por ser uma lista, iremos utilizar um array e os objetos
export const categories: Category[] = [
    { id: "1", name: "Curso", icon: "code"},
    { id: "2", name: "Projeto", icon: "folder"},
    { id: "3", name: "Site", icon: "language"},
    { id: "4", name: "Artigo", icon: "newspaper"},
    { id: "5", name: "Vídeo", icon: "movie"},
    { id: "6", name: "Documentação", icon: "content-paste"},

]