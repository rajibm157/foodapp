import React from 'react';
import { StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screens from '_screens';
import { Icon } from '_common';
import { Colors } from '_styles';

const Tab = createBottomTabNavigator();

const TabNavigator = ({ style }) => {
  return (
    <Animated.View style={[styles.container, { ...style }]}>
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
        }}>
        <Tab.Screen
          name="Home"
          component={Screens.HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Icon
                type="materialCommunityIcons"
                name="home"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Screens.HomeScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Icon
                type="materialCommunityIcons"
                name="account"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </Animated.View>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: Colors.White,
  },
});
