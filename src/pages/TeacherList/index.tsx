import React from 'react';
import { View, Text } from 'react-native';

// Components
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

// Style
import styles from './styles';

function TeacherList () {
    return (
        <View style={styles.container}>
            <PageHeader title="Available Proffys" />

            <TeacherItem />
        </View>
    );
}

export default TeacherList;