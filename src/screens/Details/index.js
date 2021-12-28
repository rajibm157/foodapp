import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Container, Headers, Icon, Button, CartButton } from '_components';
import { Typography, Colors, _Styles, SIZES } from '_styles';

export default function DetailsScreen({ route }) {
  const [item] = useState(route.params.item);
  const [total, setTotal] = useState(1);

  return (
    <Container>
      <Headers back />
      <View style={styles.container}>
        <View style={[_Styles.allCenter, styles.cardImage, _Styles.minShadow]}>
          <Image source={{ uri: item.image }} style={styles.image} />
        </View>
        <View style={styles.cartBtn}>
          <CartButton total={total} onPress={setTotal} />
        </View>
        <View style={styles.body}>
          <Text style={[Typography.Header1, styles.title]}>{item.title}</Text>
          <View style={[_Styles.rowCenter, styles.menuBar]}>
            <View style={_Styles.rowCenter}>
              <Icon type="antDesign" name="star" color="#F5A62E" size={15} />
              <Text style={[Typography.Caption, styles.menuItem]}>4+</Text>
            </View>
            <Text style={[Typography.Caption, styles.menuItem]}>🔥 300cal</Text>
            <Text style={[Typography.Caption, styles.menuItem]}>
              ⏰ 5-10min
            </Text>
          </View>
          <Text style={[Typography.BodyRegular, styles.description]}>
            {item.description}
            <Text style={_Styles.link}> more</Text>
          </Text>
        </View>
        <View style={styles.footer}>
          <Button title="Add to cart" onPress={() => {}} />
        </View>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: SIZES.SCALE_18 * 2,
  },
  cardImage: {
    width: 258,
    height: 224,
    borderRadius: 50,
    alignSelf: 'center',
    backgroundColor: Colors.White,
    shadowColor: Colors.Shade2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 160,
    height: 150,
    borderRadius: 20,
    resizeMode: 'cover',
  },
  cartBtn: {
    alignSelf: 'center',
    marginTop: SIZES.SCALE_18 * 2,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    marginTop: SIZES.SCALE_18 * 2,
  },
  title: {
    color: Colors.FontColor,
    textAlign: 'center',
  },
  menuBar: {
    width: '60%',
    marginTop: SIZES.SCALE_10,
    justifyContent: 'space-evenly',
  },
  menuItem: {
    marginLeft: SIZES.SCALE_10 / 2,
  },
  description: {
    marginTop: SIZES.SCALE_18 * 2,
    paddingHorizontal: SIZES.SCALE_10 * 2,
  },
  footer: {
    marginTop: SIZES.SCALE_45 * 1.5,
    paddingHorizontal: SIZES.SCALE_10 * 2,
  },
});
