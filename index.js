/**
 * @format
 */

import {AppRegistry, Text, TextInput} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {
     configureReanimatedLogger, ReanimatedLogLevel
} from 'react-native-reanimated'
Text.defaulutProps={}
TextInput.defaulutProps={}

AppRegistry.registerComponent(appName, () => App);
