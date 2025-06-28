import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '@utils/NavigationUtils';
import SplashScreen from '@features/auth/SplashScreen';
import DeliveryLogin from '@features/auth/DeliveryLogin';
import CustomerLogin from '@features/auth/CustomerLogin';

const Stack = createNativeStackNavigator();

const Navigation: FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="DeliveryLogin" options={{ animation: 'fade' }} component={DeliveryLogin} />
        <Stack.Screen name="CustomerLogin" options={{ animation: 'fade' }} component={CustomerLogin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
