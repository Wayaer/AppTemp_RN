import {createStackNavigator, createBottomTabNavigator, createAppContainer,} from 'react-navigation';
import {Utils, NativeModules, React, Component, Constant,} from "rn-curiosity";
import Launch from './Launch';
import LoginView from './LoginView'
import HomeTab from "../page/home/HomeTab";
import MineTab from "../page/mine/MineTab";
import CenterTab from "../page/center/CenterTab";
import {CustomBaseView, CustomView} from "../utils/CustomComponent";

let lastBackPressed = Date.now();
const navigationOptions = {header: null, gesturesEnabled: true,}
const Navigator = createStackNavigator({
        Tab: {
            screen: createBottomTabNavigator({
                    HomeTab: {screen: HomeTab},
                    CenterTab: {screen: CenterTab,},
                    MineTab: {screen: MineTab,},
                },
                {
                    backBehavior: 'none',// 按 back 键是否跳转到第一个 Tab， none 为不跳转
                    swipeEnabled: false,
                    animationEnabled: false,
                    lazy: true,
                    initialRouteName: 'HomeTab',
                    tabBarOptions: {
                        showIcon: true,
                        //showLabel - 是否显示tab bar的文本，默认是true
                        showLabel: false,
                        //按下tab bar时的不透明度(仅支持iOS和Android < 5.0).
                        pressOpacity: 0.8,
                        //tab bar的样式
                        style: {
                            paddingTop: 4,
                            height: 43,
                            borderTopWidth: 0,
                        },
                    },
                }),
            navigationOptions: navigationOptions,
        },

        Launch: {
            screen: Launch,
            navigationOptions: navigationOptions,
        },
        LoginView: {
            screen: LoginView,
            navigationOptions: navigationOptions,
        },

    },
    {
        initialRouteName: 'Launch', // 默认显示界面
    }
);
const CreateTab = createAppContainer(Navigator)
export default class App extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // console.log(NativeModules.RNFetchBlob)
        // Tools.downLoad('https://xyzl.oss-cn-hangzhou.aliyuncs.com/version/android/apk/1/1.apk',)
        Utils.setStatusBarColor(true)
        Utils.netInfoAddEventListener(this.netInfo)
        Utils.backHandlerAddEventListener(this.onBackPressed)
    }

    componentWillUnmount() {
        Utils.removeReceivesMessage(this.msg)
        Utils.netInfoRemoveEventListener(this.netInfo)
        Utils.backHandlerRemoveEventListener(this.onBackPressed)
    }

    /* 监听网络变化 */
    netInfo = (status) => {
        if (status.type === 'none' || status.type === 'unknown') {
            Utils.Toast('设备未联网')
        }
    }

    /* 再按一次退出函数，仅支持android */
    onBackPressed = () => {
        if (lastBackPressed && lastBackPressed + 2000 >= Date.now()) Utils.ExitApp()
        lastBackPressed = Date.now();
        Utils.toastAndroid('再按一次退出应用')
        return true;
    }

    render() {
        return (
            <CustomView style={{flex: 1,}}>
                <CreateTab onNavigationStateChange={(prevState, newState, action) => {
                    if (Android) {
                        if (newState.routes.length > 1) {
                            Utils.backHandlerRemoveEventListener(this.onBackPressed)
                        } else {
                            Utils.backHandlerAddEventListener(this.onBackPressed)
                        }
                    }
                }}/>
            </CustomView>
        );
    }
}