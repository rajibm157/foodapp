import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { Loading } from '_containers';
import AuthNavigator from './authNavigator';
import CustomDrawer from './CustomDrawer';
import { checkLogin } from '_features/authSlice';
import { getToken } from '_utils';

export default function Navigator() {
  const { isLogedIn, isLoginCheck } = useSelector((state) => state.auth);
  const { isLoading } = useSelector((state) => state.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    async function checkAuth() {
      const isLogin = await getToken();
      if (isLogin) {
        dispatch(checkLogin(true));
      }
    }

    checkAuth();
  }, []);

  if (isLoginCheck) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      {isLogedIn ? <CustomDrawer /> : <AuthNavigator />}
      {isLoading && <Loading />}
    </NavigationContainer>
  );
}
