import { CustomBaseView } from '../../utils/CustomComponent';
import {
  React, Component,
  TabBarItem,
  Utils,
} from 'rn-curiosity';
import { publicCss } from '../../styles/PublicCss';

export default class MineTab extends Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarIcon: ({ focused }) => (
      <TabBarItem
        imageSource={focused ? require('../../resources/mine/mine_selected.png') : require('../../resources/mine/mine_default.png')}
        text={'我的'}
        textStyle={[{ color: focused ? Colors.mainBlack : Colors.gray999 }, publicCss.tabBarText]}
        imageStyle={publicCss.tabBarImage}
        onPress={() => {
          navigation.navigate(navigation.state.routeName);
        }}/>),
  });

  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
    };
  }

  componentDidMount() {
    Utils.navigationDidFocus(this, data => {
    });
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <CustomBaseView/>
    );
  }


}

