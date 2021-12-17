import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Input, Button, GoogleLogin, AuthHeader } from '_components';
import { Routes } from '_constants';
import { Typography, Colors, _Styles } from '_styles';

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');

  return (
    <Container>
      <AuthHeader button="Cancel" onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <Text style={[Typography.Header1, styles.title]}>Forgot password</Text>
        <Text style={[Typography.BodyRegular, styles.description]}>
          Enter your email address to request a{'\n'} password reset.
        </Text>
        <View style={styles.body}>
          <Input
            label="Email Address"
            placeholder="Enter email"
            //error="Can’t leave field empty"
            onChange={(e) => setEmail(e)}
            value={email}
          />
        </View>
        <GoogleLogin style={styles.googleButton} />
        <Button
          title="Forgot Password"
          onPress={() => navigation.navigate(Routes.Reset)}
        />
        <Button
          title="Create an account"
          secondary
          onPress={() => navigation.navigate(Routes.Signup)}
          style={styles.footerLink}
        />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 110,
  },
  title: {
    color: Colors.FontColor,
    textAlign: 'center',
  },
  description: {
    marginTop: 15,
    color: Colors.FontColor,
    textAlign: 'center',
  },
  body: {
    marginTop: 50,
    marginBottom: 190,
    //marginBottom: 165,
  },
  googleButton: {
    marginBottom: 20,
    alignSelf: 'center',
  },
  footerLink: {
    marginVertical: 20,
  },
});
