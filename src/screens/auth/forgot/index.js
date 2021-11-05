import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Container, Input, Button, GoogleLogin, AuthHeader } from "_components";
import { Routes } from "_constants";
import { Fonts, Colors, _styles } from "_styles";

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState("");

  return (
    <Container>
      <AuthHeader button="Cancel" onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <Text style={styles.title}>Forgot password</Text>
        <Text style={styles.description}>
          Enter your email address to request a{"\n"} password reset.
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
    ...Fonts.header1,
    color: Colors.FontColor,
    textAlign: "center",
  },
  description: {
    marginTop: 15,
    ...Fonts.bodyRegular,
    color: Colors.FontColor,
    textAlign: "center",
  },
  body: {
    marginTop: 50,
    marginBottom: 190,
    //marginBottom: 165,
  },
  googleButton: {
    marginBottom: 20,
    alignSelf: "center",
  },
  footerLink: {
    marginVertical: 20,
  },
});
