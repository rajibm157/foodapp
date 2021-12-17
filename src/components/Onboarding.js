import React from 'react';
import { Animated, Image, StyleSheet, Text, View } from 'react-native';
import { Colors, Typography, SIZES, _Styles } from '_styles';

const Onboarding = ({ data }) => {
  const scrollX = new Animated.Value(0);

  const dotPosition = Animated.divide(scrollX, SIZES.WINDOW_WIDTH);

  return (
    <View style={styles.main}>
      <Animated.ScrollView
        horizontal
        pagingEnabled
        snapToAlignment="center"
        decelerationRate={0}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        showsHorizontalScrollIndicator={false}>
        {data.map(({ title, image }, mainIndex) => (
          <View
            style={[_Styles.allCenter, styles.body]}
            key={mainIndex.toString()}>
            <Text style={[Typography.Header1, styles.title]}>{title}</Text>
            <Image source={image} style={styles.image} />
          </View>
        ))}
      </Animated.ScrollView>
      <View style={[styles.dotsContainer, _Styles.rowAllCenter]}>
        {data.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          const dotSize = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [6, 8, 6],
            extrapolate: 'clamp',
          });

          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [Colors.Shade2, Colors.Accent, Colors.Shade2],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              opacity={opacity}
              style={[
                styles.dots,
                { width: dotSize, height: dotSize, backgroundColor: dotColor },
              ]}
              key={index + item}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  body: {
    flex: 1,
    width: SIZES.WINDOW_WIDTH,
  },
  title: {
    textAlign: 'center',
    color: Colors.FontColor,
  },
  image: {
    marginTop: 46,
    width: 338,
    height: 268,
    resizeMode: 'contain',
  },
  dotsContainer: {
    height: 10,
    marginTop: 40,
  },
  dots: {
    borderRadius: 5,
    marginHorizontal: 12,
  },
});
