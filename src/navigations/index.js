import * as React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import { Loading } from '_containers';
import AuthNavigator from './authNavigator';
import AppNavigator from './appNavigator';

export default function Navigator() {
  const { isLogedIn } = useSelector((state) => state.auth);
  const { isLoading } = useSelector((state) => state.loading);

  return (
    <NavigationContainer>
      {isLogedIn ? <AppNavigator /> : <AuthNavigator />}
      {isLoading && <Loading />}
    </NavigationContainer>
  );
}
