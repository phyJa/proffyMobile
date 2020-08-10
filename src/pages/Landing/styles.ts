import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8257E5',
        justifyContent: 'center',
        padding: 40
    },

    banner: {
        width: '100%',
        resizeMode: 'contain' //This will show all the content of the image proportionally to its width (or height) predefined
    },

    title: {
        color: '#FFF',
        fontSize: 20,
        fontFamily: 'Poppins_400Regular',
        lineHeight: 30,
        marginTop: 80
    },

    titleBold: {
        fontFamily: 'Poppins_600SemiBold'
    }
});

export default styles;