import {
    CustomBaseView,
} from "../../utils/CustomComponent";
import {
    TabBarItem,
    Utils,
    React, Component, CustomButton,
} from "rn-curiosity"
import {RNSelector} from "rn-selector"
import {publicCss} from "../../styles/PublicCss";


// const defaultSelectTime = '2018-01-01'
// const pickerTimeInterval = ['2018-01-12', '2026-01-07']


const defaultSelectTime = '2019-02-28 10:12:13'
const pickerTimeInterval = ['2018-06-12 09:04:33', '2021-01-07 00:22:34']

// const defaultSelectTime = '12:02:28'
// const pickerTimeInterval = ['11-06-12', '2021-01-07']
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
        this.showAlertPicker()
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
                        this.showAlertPicker()
                    }}>{"按钮"}</CustomButton>
            </CustomBaseView>
        )
    }

    showAlertPicker = () => {
        RNSelector.alertPicker({
            showUnit: true, itemHeight: 30,
            pickerType: 'dateTime',
            defaultSelectTime: defaultSelectTime,
            pickerTimeInterval: pickerTimeInterval,
            sureText: '确定', title: '时间', cancelText: '取消',
        }, (time) => {
            Utils.Toast(time)

        }, () => {

        })
    }


}

