import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from "@expo/vector-icons";

// Components
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

// Style
import styles from './styles';


function TeacherList () {
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);

    function handleToggleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible);
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
                        />

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                            
                                <Text style={styles.label}> Week day </Text>
                            
                                <TextInput
                                    placeholderTextColor="#c1bccc" 
                                    style={styles.input}
                                    placeholder="Type the week day"
                                />
                            </View>

                            <View style={styles.inputBlock}>
                            
                                <Text style={styles.label}> Time </Text>
                            
                                <TextInput
                                    placeholderTextColor="#c1bccc" 
                                    style={styles.input}
                                    placeholder="Type the time"
                                />
                            </View>
                        </View>

                        <RectButton style={styles.submitButton}>
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
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </ScrollView>
        </View>
    );
}

export default TeacherList;