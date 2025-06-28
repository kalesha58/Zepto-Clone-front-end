import { View, StyleSheet, Image } from 'react-native';
import React, { FC, useEffect } from 'react';
import { Colors } from '@utils/Constants';
import Logo from '@assets/images/logo.jpeg';
import { screenWidth } from '@utils/Scaling';
import { navigate } from '@utils/NavigationUtils';

const SplashScreen: FC = () => {
    useEffect(() => {
        const NavigateUser = async () => {

            navigate('CustomerLogin');
        };
        const timer = setTimeout(NavigateUser, 2000);

        return () => clearTimeout(timer);
    }, []);
    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logoImage} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoImage: {
        height: screenWidth * 0.5,
        width: screenWidth * 0.5,
        resizeMode: 'contain',
    },
});

export default SplashScreen;
