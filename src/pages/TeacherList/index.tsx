import React from 'react';
import { View, Text, ScrollView } from 'react-native';

// Components
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

// Style
import styles from './styles';

function TeacherList () {
    return (
        <View style={styles.container}>
            <PageHeader title="Available Proffys">
                <Text>Testing</Text>
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