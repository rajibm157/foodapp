import React from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import Src from './src';

let customFonts = {
  'DMSans-Bold': require('./src/assets/fonts/DMSans-Bold.ttf'),
  'Sk-Modernist-Bold': require('./src/assets/fonts/Sk-Modernist-Bold.otf'),
  'Sk-Modernist-Regular': require('./src/assets/fonts/Sk-Modernist-Regular.otf'),
};

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (this.state.fontsLoaded) {
      return <Src />;
    } else {
      return <AppLoading />;
    }
  }
}
