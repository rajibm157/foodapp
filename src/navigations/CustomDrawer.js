import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Sidebar } from '_components';
import Screens from '_screens';
import { Colors } from '_styles';

const Drawer = createDrawerNavigator();

const CustomDrawer = () => {
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
        drawerContent={(props) => <Sidebar {...props} />}
        initialRouteName="Dwawer">
        <Drawer.Screen name="Dwawer">
          {(props) => <Screens.HomeScreen {...props} />}
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
    width: '55%',
    paddingRight: 20,
    backgroundColor: 'transparent',
  },
  drawerContainer: {
    backgroundColor: 'transparent',
  },
});
