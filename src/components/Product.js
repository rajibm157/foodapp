import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from '_common';
import { Typography, Colors, _Styles, SIZES } from '_styles';

const Product = ({ title, image, description, star, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.body}>
        <Text style={[Typography.Header3, styles.title]} numberOfLines={1}>
          {title}
        </Text>
        <Text style={[Typography.Caption, styles.desc]} numberOfLines={2}>
          {description}
        </Text>
        <View style={[_Styles.rowCenterSpace, styles.footer]}>
          <View style={_Styles.rowCenter}>
            <Icon type="antDesign" name="star" color="#F5A62E" size={15} />
            <Text style={[Typography.Caption, styles.footerTitle]}>
              {star}+
            </Text>
          </View>
          <Icon
            type="antDesign"
            name="heart"
            color={Colors.Primary}
            size={15}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

Product.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  star: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Product;

const styles = StyleSheet.create({
  container: {
    width: 200,
    marginRight: SIZES.SCALE_18,
    padding: SIZES.SCALE_16,
    backgroundColor: Colors.White,
    borderRadius: 50,
  },
  image: {
    width: 165,
    height: 162,
    alignSelf: 'center',
    resizeMode: 'cover',
    borderRadius: 20,
  },
  body: {
    flex: 1,
    padding: SIZES.SCALE_10 / 2,
    paddingTop: SIZES.SCALE_10,
  },
  title: {
    color: Colors.FontColor,
  },
  desc: {
    marginTop: SIZES.SCALE_8 / 2,
    color: Colors.FontColor,
  },
  footer: {
    marginVertical: SIZES.SCALE_10 / 2,
  },
  footerTitle: {
    marginLeft: SIZES.SCALE_8 / 2,
  },
});
