import React from "react";
import { View, Image, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

// Interfaces
export interface Teacher {
    avatar: string,
    bio: string,
    cost: number,
    id: number,
    name: string,
    subject: string,
    whatsapp: string
}

interface TeacherItemProps {
    teacher: Teacher
}


// Style
import styles from './styles';

//Icons 
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsAppIcon from '../../assets/images/icons/whatsapp.png';

const TeacherItem:React.FC<TeacherItemProps> = ({teacher}) => {
    function handleLinkToWhatsapp() {

    }
    
    return (
        <View style={styles.container}> 
            <View style={styles.profile}>
                <Image
                    style={styles.avatar} 
                    source={{uri: teacher.avatar }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>
                        {teacher.name}
                    </Text>

                    <Text style={styles.subject}>
                        {teacher.subject}
                    </Text>
                </View>
            </View>

            <Text style={styles.bio}>
                {teacher.bio}
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Price per hour: {'   '}
                    <Text style={styles.priceValue}> R$ {teacher.cost} </Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        {/* <Image source={heartOutlineIcon} /> */}
                        <Image source={unfavoriteIcon} />
                    </RectButton>

                    <RectButton 
                        style={styles.contactButton}
                        onPress={handleLinkToWhatsapp}
                    >
                        <Image source={whatsAppIcon} />
                        <Text style={styles.contactButtonText}>Contact</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}

export default TeacherItem;