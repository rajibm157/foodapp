import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import {
  DrawerContentScrollView,
  useDrawerProgress,
} from '@react-navigation/drawer';
import { useDispatch } from 'react-redux';
import { Icon, Button } from '_common';
import { logout } from '_features/authSlice';
import { Images, Constants } from '_constants';
import { Colors, Typography, SIZES } from '_styles';

const Sidebar = (props) => {
  const dispatch = useDispatch();
  const progress = useDrawerProgress();

  useEffect(() => props.setProgress(progress), []);

  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{ flex: 1 }}>
      <View style={styles.container}>
        {/* Close Button */}
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => props.navigation.closeDrawer()}>
          <Icon name="close" type="ionic" size={30} />
        </TouchableOpacity>
        {/* Header */}
        <View style={styles.header}>
          <Image source={Images.sidebarPic} />
          <Text style={styles.title}>Marvis Ighedosa</Text>
          <Text style={styles.description}>dosamarvis@gmail.com</Text>
        </View>
        {/* Body */}
        <TouchableOpacity style={styles.body}>
          <Icon type="fontAwesome" name="user-o" size={24} />
          <Text style={[styles.description, styles.itemTitle]}>
            {Constants.sidebar.profile}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.body}>
          <Icon type="materialIcons" name="work-outline" size={24} />
          <Text style={[styles.description, styles.itemTitle]}>
            {Constants.sidebar.payment}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.body}>
          <Icon type="ionicon" name="settings-outline" size={24} />
          <Text style={[styles.description, styles.itemTitle]}>
            {Constants.sidebar.settings}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.body}>
          <Icon type="ionicon" name="chatbubble-ellipses-outline" size={24} />
          <Text style={[styles.description, styles.itemTitle]}>
            {Constants.sidebar.help}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.body}>
          <Icon
            type="materialCommunityIcons"
            name="note-text-outline"
            size={24}
          />
          <Text style={[styles.description, styles.itemTitle]}>
            {Constants.sidebar.policy}
          </Text>
        </TouchableOpacity>
        {/* Footer */}
        <View style={styles.footer}>
          <Button
            title={Constants.sidebar.button}
            style={styles.button}
            onPress={() => dispatch(logout())}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

export default Sidebar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  closeButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.White,
    borderRadius: 15,
  },
  header: {
    marginTop: SIZES.SCALE_18,
    marginBottom: SIZES.SCALE_10,
  },
  title: {
    ...Typography.Header2,
    color: Colors.Black,
    marginBottom: SIZES.SCALE_10 / 2,
  },
  description: {
    ...Typography.BodyRegular,
    color: Colors.Black,
  },
  body: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZES.SCALE_18,
    marginBottom: SIZES.SCALE_8,
  },
  itemTitle: {
    marginLeft: SIZES.SCALE_8,
  },
  footer: {
    marginTop: SIZES.SCALE_45 * 1.5,
  },
  button: {
    height: 49,
    width: 100,
  },
});
