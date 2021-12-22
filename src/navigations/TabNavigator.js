import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '_common';
import { Routes } from '_constants';
import { Home, Cart, Notifications, Orders, Search } from '_containers';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={Routes.Home}
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name={Routes.Home}
        component={Home}
        options={{
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
        name={Routes.Orders}
        component={Orders}
        options={{
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
        name={Routes.Search}
        component={Search}
        options={{
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
        name={Routes.Notifications}
        component={Notifications}
        options={{
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
        name={Routes.Cart}
        component={Cart}
        options={{
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
  );
};

export default TabNavigator;
