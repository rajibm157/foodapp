import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Container, Headers, Category, Product } from '_components';
import { DATA, Routes } from '_constants';
import { Typography, Colors, _Styles, SIZES } from '_styles';

export default function HomeScreen({ navigation }) {
  const [selected, setSelected] = useState(1);

  return (
    <Container>
      <Headers />
      <View style={styles.container}>
        <Text style={[Typography.Header1, styles.title]}>
          Enjoy Delicious food
        </Text>
        <View style={styles.headerItems}>
          <FlatList
            horizontal={true}
            data={DATA.Category}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <Category
                title={item.name}
                image={item.image}
                active={selected !== index ? false : true}
                onPress={() => setSelected(index)}
              />
            )}
            keyExtractor={(_, index) => index.toString()}
          />
        </View>
        <View style={styles.body}>
          <View style={[_Styles.rowCenterSpace, styles.menuBar]}>
            <Text style={Typography.Header2}>Popular restaurants</Text>
            <TouchableOpacity>
              <Text style={[Typography.Caption, styles.menuDesc]}>
                View all(29)
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.itemList}>
            <FlatList
              horizontal={true}
              data={DATA.Category}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <Product
                  id={item.id}
                  title={item.title}
                  description={item.desc}
                  star="4"
                  image={item.image}
                  onPress={() => navigation.push(Routes.Details, { item })}
                />
              )}
              keyExtractor={(_, index) => index.toString()}
            />
          </View>
        </View>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: SIZES.SCALE_10 * 2,
    paddingVertical: SIZES.SCALE_16 * 2,
  },
  title: {
    color: Colors.FontColor,
  },
  headerItems: {
    paddingVertical: SIZES.SCALE_18,
  },
  body: {
    flex: 1,
    marginTop: SIZES.SCALE_10,
  },
  menuBar: {
    paddingRight: SIZES.SCALE_10 * 2,
  },
  menuDesc: {
    fontSize: SIZES.FONT_SIZE_14,
    textDecorationLine: 'underline',
    color: Colors.Primary,
    textAlign: 'right',
  },
  itemList: {
    flex: 1,
    paddingVertical: SIZES.SCALE_16 * 2,
  },
});
