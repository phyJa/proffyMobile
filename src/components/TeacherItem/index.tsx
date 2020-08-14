import React, { useState } from "react";
import { View, Image, Text, Linking } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import AsyncStorage from '@react-native-community/async-storage';
import api from "../../services/api";

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
    teacher: Teacher,
    favorited: boolean
}


// Style
import styles from './styles';

//Icons 
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsAppIcon from '../../assets/images/icons/whatsapp.png';


const TeacherItem:React.FC<TeacherItemProps> = ({teacher, favorited}) => {
    const [isFavorited, setIsFavorited] = useState(favorited);
    
    function handleLinkToWhatsapp() {
        api.post("/connections",
            {
                user_id: teacher.id
            }    
        );
        Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`); // Learn more about Deep Linking
    }

    async function handleToggleFavorite() {
        // Get the favorites from the phone database
        const favorites = await AsyncStorage.getItem('favorites');

        // Create an empty array
        let favoritesArray = [];

        // If the favorites from the database exist, put them in the empty array
        if(favorites) {
            favoritesArray = JSON.parse(favorites)
        }

        if(isFavorited) {
            // Remove from favorites

            const favoriteIndex = favoritesArray.findIndex(
                (teacherItem: Teacher) =>  {
                    return (teacherItem.id === teacher.id);
                }
            );
            
            // Remove the teacher from the favorite index
            favoritesArray.splice(favoriteIndex, 1);

            //Change the value of isFavorited to true
            setIsFavorited(false);
        } else {
            // Add to favorites
            
            // Add the teacher to the favoritesArray
            favoritesArray.push(teacher);

            //Change the value of isFavorited to true
            setIsFavorited(true);
        }

         // Set in the phone storage the new favorites
         await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
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
                    <RectButton 
                        style={[
                            styles.favoriteButton, 
                            isFavorited ? styles.favorited : {}
                        ]}
                        onPress={handleToggleFavorite}
                    >
                        {
                            isFavorited 
                                ? <Image source={unfavoriteIcon} />
                                : <Image source={heartOutlineIcon} />
                        }
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