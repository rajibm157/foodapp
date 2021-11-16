import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Input, Button, GoogleLogin, AuthHeader } from '_components';
import { Routes, Constants } from '_constants';
import { Typography, Colors, _Styles } from '_styles';

export default function LoginScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handelLogin = () => {
    props.login({ username: email, password });
  };

  return (
    <Container>
      <AuthHeader
        button="Skip"
        onPress={() => props.navigation.navigate(Routes.Signup)}
      />
      <View style={styles.container}>
        <Text style={styles.title}>{Constants.login.title}</Text>
        <Text style={styles.description}>{Constants.login.description}</Text>
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
          onPress={() => props.navigation.navigate(Routes.Forgot)}
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
    ...Typography.Header1,
    color: Colors.FontColor,
    paddingLeft: 24,
  },
  description: {
    marginTop: 15,
    ...Typography.BodyRegular,
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
