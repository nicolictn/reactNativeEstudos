//stack = estratégia de navegação em pilha.
import { Stack } from "expo-router"

import { colors } from "@/styles/colors"

//stack = pilha 

export default function Layout() {

    const backgroundColor = colors.gray[950]

    //configuração para cor de fundo do aplicativo 
    return ( 
        <Stack 
            screenOptions={{
                headerShown: false, //desabilita a visualização do endereço de arquivos/ cabeçalho do arquivo
                contentStyle: { backgroundColor }, //short sintaxe = compreende que o conteúdo é igualmente a constante criada como BackGroundColor
            }}
        />
    )
}