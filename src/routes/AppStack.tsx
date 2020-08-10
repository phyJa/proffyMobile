import React from 'react';
import { NavigationContainer } from "@react-navigation/native"; // An analogue to the Browser Router (Web)
import { createStackNavigator } from "@react-navigation/stack"; // The stack navigation

// Pages
import Landing from '../pages/Landing';

const { Navigator, Screen } = createStackNavigator();

function AppStack () {
    return(
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name="Landing" component={Landing} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;