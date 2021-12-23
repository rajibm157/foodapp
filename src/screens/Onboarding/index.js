import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Headers, Onboarding, Button } from '_components';
import { Routes, Constants } from '_constants';
import { SIZES } from '_styles';

export default function OnboardingScreen({ navigation }) {
  return (
    <Container>
      <Headers
        auth
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
    paddingTop: SIZES.SCALE_10 * 4,
  },
  body: {
    flex: 1,
    padding: SIZES.SCALE_10 * 2,
    marginTop: SIZES.SCALE_45,
  },
  footerLink: {
    marginVertical: SIZES.SCALE_10 * 2,
  },
});
