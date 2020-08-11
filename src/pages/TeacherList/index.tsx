import React from 'react';
import { View, Text } from 'react-native';

// Components
import PageHeader from '../../components/PageHeader';

// Style
import styles from './styles';


function TeacherList () {
    return (
        <View style={styles.container}>
            <PageHeader />
        </View>
    )
}

export default TeacherList;