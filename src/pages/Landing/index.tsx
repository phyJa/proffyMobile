import React, {useState, useEffect} from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler"; // This will replace TouchableOpacity to give a more special effect on pressing a button. This comes with the navigation package.
import api from '../../services/api';

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

    function handleNavigateToStudyPages () {
        navigation.navigate('Study');
    }

    //Let's use states once more, but at this time starting with the value 0
    const [totalConnections, setTotalConnections] = useState(0);
    
    // Then, import { useEffect } from react. This is a function with two
    // parameters: 
    // 1. A function (the first)
    // 2. An array of dependencies, which will state when to call the 
    // first parameter. When this array has its values changed, it calls
    // the first argument again. If you want to execute the function only once
    // when the component is shown in screen, then keep the array empty.
    useEffect(
        () => {
            api.get('/connections').then(response => {
                    const {total} = response.data; // or const total = response.data.total;

                    setTotalConnections(total);
                }
            );
        },
        []
    );

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
                <RectButton 
                    style={[styles.button, styles.buttonPrimary]}
                    onPress={handleNavigateToStudyPages}
                >
                    <Image source={studyIcon}/>
                    <Text style={styles.buttonText}>Study</Text>
                </RectButton>

                <RectButton 
                    onPress={handleNavigateToTeachPage} 
                    style={[styles.button, styles.buttonSecondary]}
                >
                    <Image source={teach}/>
                    <Text style={styles.buttonText}>Teach</Text>
                </RectButton>
            </View>

            <Text style={styles.totalConnections}> 
                Total of {totalConnections} connections made {' '}
                <Image source={heartIcon}/>
             </Text>
        </View>
    );
}

export default Landing;