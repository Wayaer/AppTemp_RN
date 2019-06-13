import {
    CustomBaseView,
} from "../../utils/CustomComponent";
import {
    TabBarItem,
    Utils,
    React, Component, CustomButton,
} from "rn-curiosity"
import {publicCss} from "../../styles/PublicCss";
import NativeUtils from "rn-curiosity/src/NativeUtils";

let dark = true
export default class HomeTab extends Component {

    static navigationOptions = ({navigation}) => ({
        tabBarIcon: ({focused}) => (
            <TabBarItem
                imageSource={focused ? require('../../resources/home/home_selected.png') : require('../../resources/home/home_default.png')}
                text={'首页'}
                textStyle={[{color: focused ? Colors.mainBlack : Colors.gray999,}, publicCss.tabBarText]}
                imageStyle={publicCss.tabBarImage}
                onPress={() => {
                    navigation.navigate(navigation.state.routeName)

                }}/>),
    });

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        Utils.navigationDidFocus(this, (data) => {
        })
    }


    componentWillUnmount() {
    }


    render() {
        return (
            <CustomBaseView>
                <CustomButton
                    buttonStyle={{backgroundColor: Colors.blueStart, padding: 40, marginTop: 100}}
                    onPress={() => {
                        dark = !dark
                        if (dark) {
                            NativeUtils.setStatusBarColor(dark, Colors.redStart)
                        } else {
                            NativeUtils.setStatusBarColor(dark, Colors.blueStart)
                        }
                    }}>{"改变颜色"}</CustomButton>
            </CustomBaseView>
        )
    }


}

