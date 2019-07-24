import {Utils, React, Component} from 'rn-curiosity';
import {CustomView} from '../utils/CustomComponent';

export default class Launch extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <CustomView
                style={{flex: 1, backgroundColor: Colors.blueStart}}/>
        );
    }

    componentDidMount() {
        setTimeout(() => {
                Utils.goToResetView(this, 'Tab');
            }, 2000
        );
    }


}
