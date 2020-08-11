import React from 'react';
import { View } from 'react-native';
import styles from './styles';

// Components
import PageHeader from "../../components/PageHeader";

export default function Favorites () {
    return (
        <View style={styles.container}>
            <PageHeader title="My favorite Proffys" />
        </View>
    );
}