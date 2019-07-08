import {
    CustomBaseView,
} from "../../utils/CustomComponent";
import {
    TabBarItem,
    Utils,
    NativeModules,
    React, Component, CustomButton,
} from "rn-curiosity"
import {publicCss} from "../../styles/PublicCss";

const ShareUtils = NativeModules.UMShareModule


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
                        ShareUtils.shareboard('测试', 'https://img-blog.csdn.net/20171219161252613?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvYWFyb25fMTEx/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center', 'https://blog.csdn.net/aaron_111/article/details/78843837', '测试一下', [0, 2], (code, message) => {
                            console.log(code, message)
                        });
                    }}>{"按钮"}</CustomButton>
            </CustomBaseView>
        )
    }


}

