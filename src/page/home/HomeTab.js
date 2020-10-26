import {CustomView} from '../../utils/CustomComponent';
import {
    TabBarItem,
    Utils,
    NavigationTools,
} from 'rn-waya';
import {publicCss} from '../../styles/PublicCss';
import React, {Component} from 'react';
import {Text} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';


export default class HomeTab extends Component {
    static navigationOptions = ({navigation}) => ({
        tabBarIcon: ({focused}) => (
            <TabBarItem
                imageSource={
                    focused
                        ? require('../../res/home/home_selected.png')
                        : require('../../res/home/home_default.png')
                }
                text={'首页'}
                textStyle={[
                    {color: focused ? Colors.mainBlack : Colors.gray999},
                    publicCss.tabBarText,
                ]}
                imageStyle={publicCss.tabBarImage}
                onPress={() => {
                    navigation.navigate(navigation.state.routeName);
                }}
            />
        ),
    });

    constructor(props) {
        super(props);
        this.state = {
            y: 0,
            x: 0,//Screen_Width / 2 - Utils.getWidth(40),
        };
    }

    componentDidMount() {
        NavigationTools.navigationDidFocus(this, data => {
        });
    }

    render() {
        return (
            <CustomView
                onPress={() => {

                }}>
                <PanGestureHandler
                    onHandlerStateChange={({nativeEvent}) => {
                    }}
                    onGestureEvent={({nativeEvent}) => {
                        this.setState({
                            x: nativeEvent.absoluteX,
                            y: nativeEvent.absoluteY,
                        });
                    }}
                >
                    <Text
                        style={{
                            width: 60,
                            textAlign: 'center',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 60,
                            top: this.state.y,
                            left: this.state.x,
                            backgroundColor: Colors.blueStart,
                        }}
                    >{'按钮'}</Text>
                </PanGestureHandler>
            </CustomView>
        );
    }
}
