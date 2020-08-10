import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

// Style
import styles from './styles';

// Images
import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png'

function Landing() {
    return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner}/>

            <Text style={styles.title}>
                Welcome! {'\n'}
                
                <Text style={styles.titleBold}>
                    What would you like to do?
                </Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity styles={[styles.button, styles.buttonPrimary]}>
                    <Image source={studyIcon}/>
                </TouchableOpacity>

                <Text>Study</Text>
            </View>
        </View>
    );
}

export default Landing;