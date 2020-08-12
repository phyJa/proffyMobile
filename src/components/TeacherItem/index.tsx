import React from "react";
import { View, Image, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

// Style
import styles from './styles';

//Icons 
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsAppIcon from '../../assets/images/icons/whatsapp.png';

function TeacherItem() {
    return (
        <View style={styles.container}> 
            <View style={styles.profile}>
                <Image
                    style={styles.avatar} 
                    source={{uri: 'https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4' }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>
                        Diego Fernandes
                    </Text>

                    <Text style={styles.subject}>
                        Chemistry
                    </Text>
                </View>
            </View>

            <Text style={styles.bio}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    {'\n'}{'\n'}
                    In blanditiis dolore at temporibus, sunt similique illum veniam, possimus porro
                    officia unde consequuntur.
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Price per hour: {'   '}
                    <Text style={styles.priceValue}> R$ 20,00 </Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={styles.favoriteButton}>
                        <Image source={heartOutlineIcon} />
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsAppIcon} />
                        <Text style={styles.contactButtonText}>Contact</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}

export default TeacherItem;