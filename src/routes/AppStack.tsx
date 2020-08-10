import React from 'react';
import { NavigationContainer } from "@react-navigation/native"; // An analogue to the Browser Router (Web)
import { createStackNavigator } from "@react-navigation/stack"; // The stack navigation

// Pages
import Landing from '../pages/Landing';
import Teach from '../pages/GiveClasses';

const { Navigator, Screen } = createStackNavigator();

function AppStack () {
    return(
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name="Landing" component={Landing} />
                <Screen name="Teach" component={Teach} />
            </Navigator>    
        </NavigationContainer>
    );
}

export default AppStack;