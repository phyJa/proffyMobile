import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";

// Style
import styles from './styles';

// Components
import PageHeader from "../../components/PageHeader";
import { Teacher } from '../../components/TeacherItem';
import TeacherItem from "../../components/TeacherItem";

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
                    const favoritedTeachersIds = favoritedTeachers.map(
                        (favoriteTeacher: Teacher) => {
                            return favoriteTeacher.id;
                        }
                    );
                    setFavorites(favoritedTeachersIds);
                }
            }
        )
    }
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
                
            </ScrollView>
        </View>
    );
}