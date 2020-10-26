import {NativeUtils} from 'rn-curiosity';
import {CustomView} from '../utils/CustomComponent';
import React, {Component} from 'react';
import {NavigationTools} from 'rn-waya';

let background = true;
export default class Launch extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <CustomView
                onPress={() => {
                    if (background) {
                        NativeUtils.hideStatusBar();
                    } else {
                        NativeUtils.showStatusBar();
                    }
                    background = !background;
                }}
                style={{flex: 1, backgroundColor: Colors.blueStart}}/>
        );
    }

    componentDidMount() {
        setTimeout(() => {
                NavigationTools.goToResetView(this, 'Tab');
            }, 2000,
        );
    }


}
