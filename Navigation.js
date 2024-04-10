import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaUm from "./TelaUm";
import TelaDois from "./TelaDois";
import TelaTres from "./TelaTres";
import Resultado from "./Resultado";

const Stack = createStackNavigator();

function Navigation() {
    return (
        < NavigationContainer >
            <Stack.Navigator initialRouteName="TelaUm" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="TelaUm" component={TelaUm} />
                <Stack.Screen name="TelaDois" component={TelaDois} />
                <Stack.Screen name="TelaTres" component={TelaTres} />
                <Stack.Screen name="Resultado" component={Resultado} />
            </Stack.Navigator>
        </NavigationContainer >
    );
}

export default Navigation;