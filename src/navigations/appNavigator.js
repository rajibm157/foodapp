import React from 'react';
import { Easing, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import TabNavigator from './TabNavigator';
import { Routes } from '_constants';
import { Details, Checkout, Payment, Profile, Success } from '_containers';
import { Colors } from '_styles';

const Stack = createSharedElementStackNavigator();

const options = {
  gestureEnabled: false,
  transitionSpec: {
    open: {
      animation: 'timing',
      config: {
        duration: 400,
        easing: Easing.inOut(Easing.ease),
      },
    },
    close: {
      animation: 'timing',
      config: {
        duration: 400,
        easing: Easing.inOut(Easing.ease),
      },
    },
  },
  cardStyleInterpolator: ({ current: { progress } }) => {
    return {
      cardStyle: {
        opacity: progress,
      },
    };
  },
};

export default function AppNavigator({ style }) {
  return (
    <Animated.View style={[styles.container, { ...style }]}>
      <Stack.Navigator
        screenOptions={{ headerShown: false, useNativeDriver: true }}
        detachInactiveScreens={false}
        initialRouteName={Routes.Tab}>
        <Stack.Screen name={Routes.Tab} component={TabNavigator} />
        <Stack.Screen
          name={Routes.Details}
          component={Details}
          options={() => options}
          sharedElements={(route, otherRoute, showing) => {
            const { item } = route.params;
            return [
              {
                id: `item.${item.id}.photo`,
                animation: 'move',
                resize: 'clip',
                // align: ''left-top'
              },
            ];
          }}
        />
        <Stack.Screen name={Routes.Checkout} component={Checkout} />
        <Stack.Screen name={Routes.Payment} component={Payment} />
        <Stack.Screen name={Routes.Success} component={Success} />
        <Stack.Screen name={Routes.Profile} component={Profile} />
      </Stack.Navigator>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: Colors.White,
    borderColor: Colors.White,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
});
