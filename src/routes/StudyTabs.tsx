import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

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
            <Screen name="TeacherList" component={TeacherList} />
            <Screen name="Favorites" component={Favorites} />
        </Navigator>
    );
}