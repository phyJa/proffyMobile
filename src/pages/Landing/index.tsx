import React from 'react';
import { View, Image } from 'react-native';

//Style
import styles from './styles';

//Images
import landingImg from '../../assets/images/landing.png';

function Landing() {
    return (
        <View >
            <Image source={landingImg} />
        </View>
    );
}

export default Landing;