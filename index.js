/**
 * @format
 */

import {AppRegistry, YellowBox} from 'react-native';
import './src/utils/Global';
import App from './src/app/App';
import {name} from './package';

if (!__DEV__) {
    global.console = {
        info: () => {
        },
        log: () => {
        },
        warn: () => {
        },
        error: () => {
        },
    };
}

console.disableYellowBox = true;

YellowBox.ignoreWarnings(['Require cycle:']);
AppRegistry.registerComponent(name, () => App);
