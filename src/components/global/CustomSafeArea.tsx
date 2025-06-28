import { View, ViewStyle, StyleSheet, SafeAreaView } from 'react-native';
import React, { FC } from 'react';


interface ICustomSafeAreaProps {
    children?: React.ReactNode;
    style?: ViewStyle;
}

const CustomSafeArea: FC<ICustomSafeAreaProps> = ({ children, style }) => {
    return (
        <View style={[styles.container, style]}>
            <SafeAreaView >
                {children}
            </SafeAreaView>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});

export default CustomSafeArea;
