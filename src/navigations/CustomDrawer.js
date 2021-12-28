import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import AppNavigator from './appNavigator';
import { Routes } from '_constants';
import { Sidebar } from '_components';
import { Colors } from '_styles';

const Drawer = createDrawerNavigator();

const CustomDrawer = () => {
  const [progress, setProgress] = useState(new Animated.Value(0));

  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 26],
  });

  const borderWidth = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 20],
  });

  const rotate = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: ['360deg', '355deg'],
  });

  const animatedStyle = {
    borderRadius,
    borderWidth,
    transform: [{ scale, rotate }],
  };

  return (
    <View style={styles.container}>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerType: 'slide',
          overlayColor: 'transparent',
          drawerStyle: styles.drawer,
          sceneContainerStyle: styles.drawerContainer,
        }}
        drawerContent={(props) => (
          <Sidebar {...props} setProgress={setProgress} />
        )}
        initialRouteName={Routes.Drawer}>
        <Drawer.Screen name={Routes.Drawer}>
          {(props) => <AppNavigator {...props} style={animatedStyle} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Background,
  },
  drawer: {
    flex: 1,
    width: '50%',
    paddingRight: 20,
    backgroundColor: 'transparent',
  },
  drawerContainer: {
    backgroundColor: 'transparent',
  },
});
