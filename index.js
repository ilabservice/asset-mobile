/** @format */
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
const setup = require('./rn-src/setup');
AppRegistry.registerComponent(appName, () =>setup);
