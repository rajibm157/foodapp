import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Input, Button, AuthHeader } from '_components';
import { Typography, Colors, _Styles } from '_styles';

export default function ResetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');

  return (
    <Container>
      <AuthHeader button="Cancel" onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <Text style={[Typography.Header1, styles.title]}>Reset Password</Text>
        <Text style={[Typography.BodyRegular, styles.description]}>
          A reset code has been sent to your email
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
        <Button title="Reset Password" onPress={() => {}} />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 120,
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
    marginTop: 60,
    marginBottom: 45,
  },
});
