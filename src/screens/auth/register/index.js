import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Container, Input, Button, GoogleLogin, AuthHeader } from "_components";
import { Routes } from "_constants";
import { Fonts, Colors, _styles } from "_styles";

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");

  return (
    <Container>
      <AuthHeader
        button="Skip"
        onPress={() => navigation.navigate(Routes.Signup)}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Create an account</Text>
        <Text style={styles.description}>
          Welcome friend, enter your details so lets get{"\n"}started in
          ordering food.
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
            onChange={(e) => setEmail(e)}
            value={email}
            style={styles.footerLink}
          />
          <Input
            label="Confirm Password"
            placeholder="Confirm Password"
            //error="Can’t leave field empty"
            onChange={(e) => setEmail(e)}
            value={email}
          />
        </View>
        <GoogleLogin style={styles.googleButton} />
        <Button title="Create an account" onPress={() => {}} />
        <Button
          title="Login to my account"
          secondary
          onPress={() => navigation.navigate(Routes.Login)}
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
    ...Fonts.header1,
    color: Colors.FontColor,
    paddingLeft: 24,
  },
  description: {
    marginTop: 15,
    ...Fonts.bodyRegular,
    color: Colors.FontColor,
    paddingLeft: 24,
  },
  body: {
    marginTop: 50,
    marginBottom: 55,
  },
  googleButton: {
    marginBottom: 20,
    alignSelf: "center",
  },
  footerLink: {
    marginVertical: 20,
  },
});
