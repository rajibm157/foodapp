import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Sidebar } from '_components';
import Screens from '_screens';
import { Colors } from '_styles';
import Animated from 'react-native-reanimated';

const Drawer = createDrawerNavigator();

const CustomDrawer = () => {
  const [progress, setProgress] = React.useState(new Animated.Value(0));

  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 26],
  });

  const animatedStyle = { borderRadius, transform: [{ scale }] };

  return (
    <View style={styles.container}>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerType: 'slide',
          overlayColor: 'transparent',
          drawerStyle: styles.drawer,
          sceneContainerStyle: styles.drawerContainer,
          drawerContentContainerStyle: { flex: 1 },
          drawerActiveBackgroundColor: 'transparent',
        }}
        useLegacyImplementation={true}
        drawerContent={(props) => {
          setTimeout(() => setProgress(props.progress), 0);
          return <Sidebar {...props} />;
        }}
        initialRouteName="Dwawer">
        <Drawer.Screen name="Dwawer">
          {(props) => (
            <Screens.HomeScreen {...props} animatedStyle={animatedStyle} />
          )}
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
    width: '65%',
    paddingRight: 20,
    backgroundColor: 'transparent',
  },
  drawerContainer: {
    backgroundColor: 'transparent',
  },
});
