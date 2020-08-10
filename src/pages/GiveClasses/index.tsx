import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';

// Style
import styles from './styles';

// Images
import teachImageBackground from '../../assets/images/give-classes-background.png';

export default function GiveClasses () {
    const { goBack } = useNavigation();

    function handleNavigateBack () {
        goBack();
    }
    return (
        <View style={styles.container}>
            <ImageBackground 
                resizeMode="contain" 
                source={teachImageBackground} 
                style={styles.content}
            >
                <Text style={styles.title}> Do you want to be a Proffy? </Text>
                <Text style={styles.description}> 
                    To get started, submit as a teacher at our Web Platform. 
                </Text>
            </ImageBackground>

            <RectButton 
                onPress={handleNavigateBack}
                style={styles.okButton}
            >
                <Text style={styles.okButtonText}>Ok, got it!</Text>
            </RectButton>
        </View>
    );
}