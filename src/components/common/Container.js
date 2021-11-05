import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Colors } from "_styles";

const Container = ({ children, style }) => {
  return (
    <View style={[styles.container, style]}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={styles.scroll}
      >
        {children}
      </ScrollView>
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Background,
  },
  scroll: { flex: 1 },
});
