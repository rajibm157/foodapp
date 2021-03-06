import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Input, Button, GoogleLogin, Headers } from '_components';
import { Routes, Constants } from '_constants';
import { Typography, Colors, _Styles } from '_styles';

export default function LoginScreen({ navigation, login }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handelLogin = () => {
    login({ username: email, password });
  };

  return (
    <Container>
      <Headers
        auth
        button="Skip"
        onPress={() => navigation.navigate(Routes.Signup)}
      />
      <View style={styles.container}>
        <Text style={[Typography.Header1, styles.title]}>
          {Constants.login.title}
        </Text>
        <Text style={[Typography.BodyRegular, styles.description]}>
          {Constants.login.description}
        </Text>
        <View style={styles.body}>
          <Input
            label="Email Address"
            placeholder="Enter email"
            //error="Can’t leave field empty"
            onChange={(e) => setEmail(e)}
            value={email}
          />
          <Input
            label="Password"
            placeholder="Enter password"
            //error="Can’t leave field empty"
            onChange={(e) => setPassword(e)}
            value={password}
            style={styles.footerLink}
          />
        </View>
        <GoogleLogin style={styles.googleButton} />
        <Button title={Constants.login.button} onPress={handelLogin} />
        <Button
          title={Constants.login.link}
          secondary
          onPress={() => navigation.navigate(Routes.Forgot)}
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
    paddingTop: 45,
  },
  title: {
    color: Colors.FontColor,
    paddingLeft: 24,
  },
  description: {
    marginTop: 15,
    color: Colors.FontColor,
    paddingLeft: 24,
  },
  body: {
    marginTop: 54,
    //marginBottom: 65,
    //marginBottom: 100,
    marginBottom: 135,
  },
  googleButton: {
    marginBottom: 20,
    alignSelf: 'center',
  },
  footerLink: {
    marginVertical: 20,
  },
});
