import React from "react";
import { View, Image, Text } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

// Style
import styles from './styles';

// Icons
import backIcon from "../../assets/images/icons/back.png";
import logoImg from "../../assets/images/logo.png";

export default function PageHeader() {
    function handleGoBack() {

    }
    
    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleGoBack}>
                    <Image source={backIcon} resizeMode="contain" />
                </BorderlessButton>

                <Image source={logoImg} resizeMode="contain"/>
            </View>

            <Text style={styles.title}>
                Available proffys
            </Text>     
        </View>
    );
}