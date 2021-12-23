import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import Icon from './Icon';
import { MenuIcon } from '../Icons';
import { Images } from '_constants';
import { _Styles, Colors, Typography, SIZES } from '_styles';

const Headers = ({ container, title, back, auth, button, onPress }) => {
  const navigation = useNavigation();

  const handelButton = () => {
    if (back) {
      navigation.goBack();
    } else {
      navigation.toggleDrawer();
    }
  };

  return (
    <View style={[_Styles.rowCenterSpace, styles.header, container]}>
      {auth ? (
        <View style={styles.button} />
      ) : (
        <TouchableOpacity
          onPress={handelButton}
          style={[styles.sidebar, _Styles.allCenter]}>
          {back ? (
            <Icon name="left" type="antDesign" size={25} />
          ) : (
            <MenuIcon size={25} />
          )}
        </TouchableOpacity>
      )}
      {auth ? (
        <Image source={Images.logo} style={styles.logo} />
      ) : (
        <View style={[_Styles.flex1, _Styles.allCenter]}>
          <View style={styles.center}>
            <Text style={[Typography.BodyRegular, styles.title]}>
              Delivery to
            </Text>
            <Icon name="down" type="antDesign" size={10} style={styles.icon} />
          </View>
          <Text style={[Typography.BodyRegular, styles.description]}>
            {title ? title : 'lekki phase 1, Estate'}
          </Text>
        </View>
      )}
      {auth ? (
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Text style={[Typography.BodyRegular, styles.buttonTitle]}>
            {button}
          </Text>
        </TouchableOpacity>
      ) : (
        <View style={[styles.sidebar, _Styles.allCenter]}>
          <Image source={Images.sidebarPic} style={styles.image} />
        </View>
      )}
    </View>
  );
};

Headers.propTypes = {
  container: PropTypes.object,
  title: PropTypes.string,
  button: PropTypes.string,
  onPress: PropTypes.func,
  back: PropTypes.bool,
  auth: PropTypes.bool,
};

export default Headers;

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 22,
  },
  sidebar: {
    width: 40,
    height: 40,
    backgroundColor: Colors.White,
    borderRadius: 15,
  },
  center: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: Colors.SecondFontColor,
    textDecorationLine: 'underline',
  },
  icon: {
    marginLeft: SIZES.SCALE_10 / 2,
  },
  description: {
    fontSize: SIZES.FONT_SIZE_16,
    color: Colors.Primary,
  },
  image: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
  },
  //For Auth Header
  button: {
    minWidth: 50,
    alignItems: 'flex-end',
  },
  logo: {
    height: 24,
    width: 34,
    resizeMode: 'contain',
  },
  buttonTitle: {
    color: Colors.Primary,
    textDecorationLine: 'underline',
  },
});
