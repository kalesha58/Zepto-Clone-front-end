import { View, StyleSheet } from 'react-native';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import CustomSafeArea from '@components/global/CustomSafeArea';
import ProductSlider from '@components/login/ProductSlider';

const CustomerLogin = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.container}>
        <CustomSafeArea>
            <ProductSlider/>
        </CustomSafeArea>
      </View>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default CustomerLogin;