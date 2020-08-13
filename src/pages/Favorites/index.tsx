import React from 'react';
import { View, ScrollView } from 'react-native';

// Style
import styles from './styles';

// Components
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";

export default function Favorites () {
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
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </ScrollView>
        </View>
    );
}