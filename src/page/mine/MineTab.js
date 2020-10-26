import {CustomBaseView} from '../../utils/CustomComponent';
import {TabBarItem, NavigationTools} from 'rn-waya';
import React, {Component} from 'react';
import {publicCss} from '../../styles/PublicCss';
import {View, Text} from 'react-native';

export default class MineTab extends Component {
    static navigationOptions = ({navigation}) => ({
        tabBarIcon: ({focused}) => (
            <TabBarItem
                imageSource={focused ? require('../../res/mine/mine_selected.png') : require('../../res/mine/mine_default.png')}
                text={'我的'}
                textStyle={[{color: focused ? Colors.mainBlack : Colors.gray999}, publicCss.tabBarText]}
                imageStyle={publicCss.tabBarImage}
                onPress={() => {
                    navigation.navigate(navigation.state.routeName);
                }}/>),
    });

    constructor(props) {
        super(props);
        this.state = {
            userInfo: {},
            active: false,
        };
    }

    componentDidMount() {
        NavigationTools.navigationDidFocus(this, data => {
        });
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <CustomBaseView style={{justifyContent: 'center', alignItems: 'center'}}>
                {this.returnShape()}
                {this.returnShape()}
            </CustomBaseView>
        );
    }

    returnShape = () => {
        return (
            <View><Text>mine</Text></View>
        );
    };
}

