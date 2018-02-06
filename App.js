'use strict';

import SearchPage from './SearchPage.js';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator, } from 'react-navigation';

const App = StackNavigator({
  Home: { screen: SearchPage },
});
export default App;
