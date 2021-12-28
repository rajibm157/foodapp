import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import { Typography, Colors, _Styles, SIZES } from '_styles';

const Category = ({ title, image, active, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        _Styles.allCenter,
        { opacity: active ? 1 : 0.5 },
      ]}>
      <View style={[_Styles.allCenter, styles.body]}>
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={[Typography.Caption, styles.title]} numberOfLines={1}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

Category.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  active: PropTypes.bool,
};

export default Category;

const styles = StyleSheet.create({
  container: {
    marginRight: SIZES.SCALE_18,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#3EC032',
  },
  body: {
    height: 95,
    width: 70,
    padding: SIZES.SCALE_10 / 2,
    paddingTop: SIZES.SCALE_10,
    borderRadius: 50,
    borderColor: Colors.White,
    borderWidth: 10,
    backgroundColor: 'rgba(169, 232, 139, 0.2)',
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 20,
    resizeMode: 'cover',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    color: Colors.Black,
  },
});
