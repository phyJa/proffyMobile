import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";
import { useFocusEffect } from "@react-navigation/native";

// Style
import styles from './styles';

// Components
import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";

export default function Favorites () {
    // Favorites
    const [favorites, setFavorites] = useState([]);

    function loadFavorites() {
        // Go to the Phone Database, search for an item with a key named 'favorites'.
        // The only thing you can save inside it is text.
        // So, we will use the text data from the phone DataBase
        // into JSON 
        AsyncStorage.getItem('favorites').then(
            (response) => {
                if(response) {
                    const favoritedTeachers = JSON.parse(response);
                    setFavorites(favoritedTeachers);
                }
            }
        )
    }

    useFocusEffect(
        () => {
            loadFavorites();
        }
    );

    return (
        <View style={styles.container}>
            <PageHeader title="My favorite Proffys" />

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingVertical: 16
                }}
            >
                {
                    favorites.map(
                        (teacher: Teacher) => {
                            return(
                                <TeacherItem
                                    key={teacher.id}
                                    teacher={teacher}
                                    favorited // favorited = {true}
                                />
                            );
                        }
                    )
                }
            </ScrollView>
        </View>
    );
}