import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from "@expo/vector-icons";
import api from '../../services/api';
import AsyncStorage from "@react-native-community/async-storage";

// Components and interfaces
import PageHeader from '../../components/PageHeader';

import TeacherItem, { Teacher } from '../../components/TeacherItem';

// Style
import styles from './styles';


function TeacherList () {
    // States
    // Hide/show filters
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);
    
    // Inputs
    const [subject, setSubject] = useState("");
    const [weekDay, setWeekDay] = useState("");
    const [time, setTime] = useState("");

    // Teachers
    const [teachers, setTeachers] = useState([]);

    // Favorites
    const [favorites, setFavorites] = useState([]);

    // Functions
    function handleToggleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible);
    }

    useEffect(
        () => {
            // Go to the Phone Database, search for an item with a key named 'favorites'.
            // The only thing you can save inside it is text.
            // So, we will use the text data from the phone DataBase
            // into JSON 
            AsyncStorage.getItem('favorites').then(
                (response) => {
                    if(response) {
                        setFavorites(JSON.parse(response));
                    }
                }
            )
        },
        []
    )

    async function handleFiltersSubmit() {
        //To use queries, use it inside a params object
        const response = await api.get('/classes',
            {
                params: {
                    subject,
                    week_day: weekDay,
                    time
                }
            }
        )
        setIsFiltersVisible(false);
        setTeachers(response.data);
    }

    return (
        <View style={styles.container}>
            <PageHeader 
                title="Available Proffys" 
                headerRight={
                    <BorderlessButton onPress={handleToggleFiltersVisible}>
                        <Feather name="filter" size={20} color="#FFF" />
                    </BorderlessButton>
                }
            >
                {isFiltersVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}> Subject </Text>
                        
                        <TextInput
                            placeholderTextColor="#c1bccc" 
                            style={styles.input}
                            placeholder="Which is the subject?"
                            value={subject}
                            onChangeText={(text) => setSubject(text)}
                        />

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                            
                                <Text style={styles.label}> Week day </Text>
                            
                                <TextInput
                                    placeholderTextColor="#c1bccc" 
                                    style={styles.input}
                                    placeholder="Type the week day"
                                    value={weekDay}
                                    onChangeText={(text) => setWeekDay(text)}
                                />
                            </View>

                            <View style={styles.inputBlock}>
                            
                                <Text style={styles.label}> Time </Text>
                            
                                <TextInput
                                    placeholderTextColor="#c1bccc" 
                                    style={styles.input}
                                    placeholder="Type the time"
                                    value={time}
                                    onChangeText={(text) => setTime(text)}
                                />
                            </View>
                        </View>

                        <RectButton 
                            style={styles.submitButton}
                            onPress={handleFiltersSubmit}
                        >
                            <Text style={styles.submitButtonText}>
                                Filter
                            </Text>
                        </RectButton>
                    </View>
                )}
            </PageHeader>

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingVertical: 16
                }}
            >
                {
                    teachers.map(
                      (teacher: Teacher) => {
                          return (<TeacherItem key={teacher.id} teacher={teacher}/>);
                      }  
                    )
                }
            </ScrollView>
        </View>
    );
}

export default TeacherList;