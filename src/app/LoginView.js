'use strict';
import {
    CustomView,
} from "../utils/CustomComponent";
import {Component, React} from "rn-curiosity";


export default class LoginView extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {
        return (
            <CustomView
                style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>


            </CustomView>
        )
    }

}
