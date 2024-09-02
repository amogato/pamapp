import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";






import TelaJavaScript from "./componentes/TelaJavaScript";
import TelaReact from "./componentes/TelaReact";
import TelaNode from "./componentes/TelaNode"

const MenuNav = createBottomTabNavigator();
// const MenuNav = createStackNavigator(); 
//const MenuNav = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MenuNav.Navigator>

    <MenuNav.Screen name="Java Script" component = { TelaJavaScript }/>
    <MenuNav.Screen name="React" component = { TelaReact }/>
    <MenuNav.Screen name="Java Node" component = { TelaNode }/>


      </MenuNav.Navigator>
    </NavigationContainer>
    
  );
};