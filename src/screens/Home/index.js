import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Headers } from '_common';
import { Colors } from '_styles';

export default function HomeScreen() {
  return (
    <Container>
      <Headers />
      <View style={styles.container}>
        <Text>Home Screen</Text>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
