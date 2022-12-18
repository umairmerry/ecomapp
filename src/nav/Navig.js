import { View, Text } from 'react-native'
import React from 'react'
import ProductDetail from '../screens/ProductDetail';
import EcomApp from '../screens/EcomApp';
import AddToCart from '../screens/AddToCart';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function Navig() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="EcomApp">
                <Stack.Screen name="EcomApp" component={EcomApp} />
                <Stack.Screen name="ProductDetail" component={ProductDetail} />
                <Stack.Screen name="AddToCart" component={AddToCart} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}