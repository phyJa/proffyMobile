import React from 'react';
import { View, Image, Text } from 'react-native';

//Style
import styles from './styles';

//Images
import landingImg from '../../assets/images/landing.png';

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
        </View>
    );
}

export default Landing;