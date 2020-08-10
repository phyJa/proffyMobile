import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';

import teachImageBackground from '../../assets/images/give-classes-background.png';

export default function GiveClasses () {
    return (
        <View style={styles.container}>
            <ImageBackground source={teachImageBackground} style={styles.content}>

            </ImageBackground>
        </View>
    );
}