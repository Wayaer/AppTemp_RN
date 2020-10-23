
import {CustomBaseView, } from '../../utils/CustomComponent';
import {TabBarItem, Utils, React, Component} from 'rn-waya';
import {publicCss} from '../../styles/PublicCss';

export default class CenterTab extends Component {

    static navigationOptions = ({navigation}) => ({
        tabBarIcon: ({focused}) => (
            <TabBarItem
                imageSource={focused ? require('../../res/center/center_selected.png') : require('../../res/center/center_default.png')}
                text={'动态'}
                textStyle={[{color: focused ? Colors.mainBlack : Colors.gray999, }, publicCss.tabBarText]}
                imageStyle={publicCss.tabBarImage}
                onPress={() => {
                    navigation.navigate(navigation.state.routeName);
                }}/>),
    });

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
            Utils.navigationDidFocus(this, data => {
            });
    }


    componentWillUnmount() {

    }

    render() {
        return (
            <CustomBaseView />
        );
    }


}

