//importação do "gerente" de navegação baseado em pilha
import { createStackNavigator } from "@react-navigation/stack"
//importação do NavigationContainer que será um componente visual
import { NavigationContainer } from "@react-navigation/native";

//desestruturação de componente
const {Screen, Navigator} = createStackNavigator();

import Galeria from '../screens/GaleriaScreen'
import Visualizador from '../screens/VisualizadorScreen'

export default function StackRoutes(){
    return (
        <NavigationContainer>
            <Navigator>

                <Screen 
                    name='pag-galeria'
                    component={Galeria}
                    options={{title: 'Galeria de Imagens Simples'}}
                />
                <Screen
                    name='pag-vizualizacao'
                    component={Visualizador}
                    options={{title: 'Imagem Ampliada'}}
                />

            </Navigator>
        </NavigationContainer>
    )
}