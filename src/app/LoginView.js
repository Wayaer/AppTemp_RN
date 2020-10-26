import {CustomView} from '../utils/CustomComponent';
import React, {Component} from 'react'

export default class LoginView extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {
        return (
            <CustomView
                style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}/>
        );
    }

}
