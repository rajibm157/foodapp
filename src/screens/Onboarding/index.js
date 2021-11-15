import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, AuthHeader, Onboarding, Button } from '_components';
import { Routes, Constants } from '_constants';

export default function OnboardingScreen({ navigation }) {
  return (
    <Container>
      <AuthHeader
        button="Skip"
        onPress={() => navigation.navigate(Routes.Login)}
      />
      <View style={styles.container}>
        <Onboarding data={Constants.onboarding.body} />
        <View style={styles.body}>
          <Button
            title={Constants.onboarding.button}
            onPress={() => navigation.navigate(Routes.Signup)}
          />
          <Button
            title={Constants.onboarding.link}
            secondary
            onPress={() => navigation.navigate(Routes.Login)}
            style={styles.footerLink}
          />
        </View>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  body: {
    flex: 1,
    padding: 20,
    marginTop: 45,
  },
  footerLink: {
    marginVertical: 20,
  },
});
