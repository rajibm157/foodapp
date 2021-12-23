import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icons, Tabs } from '_common';
import { Routes } from '_constants';
import { Home, Cart, Notifications, Orders, Search } from '_containers';
import { _Styles, Colors } from '_styles';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={Routes.Home}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        //headerTitleAlign: 'center',
        tabBarStyle: [styles.tabbar, _Styles.shadow],
        tabBarActiveTintColor: Colors.Primary,
        tabBarInactiveTintColor: Colors.Shade2,
      }}>
      <Tab.Screen
        name={Routes.Home}
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return focused ? (
              <Icons.HomeActiveIcon color={color} size={size} />
            ) : (
              <Icons.HomeIcon color={color} size={size} />
            );
          },
        }}
      />
      <Tab.Screen
        name={Routes.Orders}
        component={Orders}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return focused ? (
              <Icons.HeartActiveIcon color={color} size={size} />
            ) : (
              <Icons.HeartIcon color={color} size={size} />
            );
          },
        }}
      />
      <Tab.Screen
        name={Routes.Search}
        component={Search}
        options={{
          tabBarButton: (props) => <Tabs {...props} />,
          tabBarIcon: ({ size }) => <Icons.SearchIcon size={size} />,
        }}
      />
      <Tab.Screen
        name={Routes.Notifications}
        component={Notifications}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return focused ? (
              <Icons.NotificationActiveIcon color={color} size={size} />
            ) : (
              <Icons.NotificationIcon color={color} size={size} />
            );
          },
        }}
      />
      <Tab.Screen
        name={Routes.Cart}
        component={Cart}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return focused ? (
              <Icons.BuyActiveIcon color={color} size={size} />
            ) : (
              <Icons.BuyIcon color={color} size={size} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabbar: {
    bottom: 0,
    height: 60,
    position: 'absolute',
    borderTopWidth: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: Colors.White,
    borderTopColor: Colors.White,
  },
});
