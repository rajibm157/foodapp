import * as React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { Loading } from '_containers';
import AuthNavigator from './authNavigator';
import CustomDrawer from './CustomDrawer';

export default function Navigator() {
  const { isLogedIn } = useSelector((state) => state.auth);
  const { isLoading } = useSelector((state) => state.loading);

  return (
    <NavigationContainer>
      {isLogedIn ? <CustomDrawer /> : <AuthNavigator />}
      {isLoading && <Loading />}
    </NavigationContainer>
  );
}
