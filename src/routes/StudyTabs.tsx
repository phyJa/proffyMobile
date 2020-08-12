import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//Import the font icons from expo:
import { Ionicons } from "@expo/vector-icons";
// Pages
import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

const {Navigator, Screen} = createBottomTabNavigator();

export default function StudyTabs() {
    return (
        <Navigator
            tabBarOptions={{
                style: {
                    elevation: 0, //This is to eliminate a shadow at the top of the tabs in Android
                    shadowOpacity: 0, // The same as the latter, but for IOS
                    height: 64
                },

                tabStyle: {
                    flexDirection: "row",
                    alignItems:"center",
                    justifyContent: 'center'
                },

                iconStyle: {
                    flex: 0,
                    width: 20,
                    height: 20
                },

                labelStyle: { // Text style
                    fontFamily: "Archivo_700Bold",
                    fontSize: 13,
                    marginLeft: 16
                },

                inactiveBackgroundColor: "#fafafc",

                activeBackgroundColor: "#ebebf5",

                inactiveTintColor: "#c1bccc",

                activeTintColor: "#32264d"
            }}
        >
            <Screen 
                name="TeacherList" 
                component={TeacherList} 
                options={{
                    tabBarLabel: "Proffys",
                    tabBarIcon: ({ color, size, focused }) => { // The same color and size passed in tabBarOptions property (inactiveTintColor)
                        return (
                            <Ionicons name="ios-easel" color={focused ? "#8257E5" : color} size={size}/>
                        );
                    }
                }}
            />

            <Screen 
                name="Favorites" 
                component={Favorites} 
                options={{
                    tabBarLabel: "Favorites",
                    tabBarIcon: ({ color, size, focused }) => { // The same color and size passed in tabBarOptions property
                        return (
                            <Ionicons name="ios-heart" color={focused ? "#8257E5" : color} size={size}/>
                        );
                    }
                }}
            />
        </Navigator>
    );
}