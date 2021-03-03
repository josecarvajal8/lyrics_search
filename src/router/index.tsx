import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/home';
import Songs from '../components/songs';
import Context from '../context';
const Stack = createStackNavigator();
const Router = () => {
    return (
        <Context>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name={'Home'} component={Home} />
                    <Stack.Screen name={'Songs'} component={Songs} />
                </Stack.Navigator>
            </NavigationContainer>
        </Context>
    )
}
export default Router;