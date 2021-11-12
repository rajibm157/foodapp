import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getItem(name) {
  try {
    const data = await AsyncStorage.getItem(name);
    if (data) {
      return JSON.parse(data);
    }
    return null;
  } catch (error) {
    return null;
  }
}

export async function setItem(name, params) {
  try {
    const value = JSON.stringify(params);
    await AsyncStorage.setItem(name, value);
    return true;
  } catch (error) {
    return false;
  }
}

export async function deleteItem(name) {
  try {
    await AsyncStorage.removeItem(name);
    return true;
  } catch (error) {
    return false;
  }
}

export async function clear() {
  try {
    await AsyncStorage.clear();
    return true;
  } catch (error) {
    return false;
  }
}
