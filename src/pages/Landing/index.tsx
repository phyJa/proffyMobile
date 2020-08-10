import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

// Style
import styles from './styles';

// Images
import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import teach from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

function Landing() {
    const navigation = useNavigation(); // const {navigate} = useNavigation();

    function handleNavigateToTeachPage() {
        navigation.navigate('Teach'); // The name attribute in the routes
    }

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
                <TouchableOpacity style={[styles.button, styles.buttonPrimary]}>
                    <Image source={studyIcon}/>
                    <Text style={styles.buttonText}>Study</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={handleNavigateToTeachPage} 
                    style={[styles.button, styles.buttonSecondary]}
                >
                    <Image source={teach}/>
                    <Text style={styles.buttonText}>Teach</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.totalConnections}> 
                Total of 300 connections made {' '}
                <Image source={heartIcon}/>
             </Text>
        </View>
    );
}

export default Landing;