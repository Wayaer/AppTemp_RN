import { Utils, React, Component, FetchBlob, NativeUtils, NativeSQLite } from 'wayae';
import { CustomView } from '../utils/CustomComponent';

let background = true;
export default class Launch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <CustomView
        onPress={() => {
          if (background) {
            NativeUtils.hideStatusBar();
          } else {
            NativeUtils.showStatusBar();
          }
          background = !background;
        }}
        style={{ flex: 1, backgroundColor: Colors.blueStart }}/>
    );
  }

  componentDidMount() {


    NativeSQLite.update('book', 'books', { sex: '更新的内容', name: '随便更行的' }, 'id', '6', (data) => {
      console.log(data);
    });
    setTimeout(() => {
        // Utils.goToResetView(this, 'Tab');
      }, 2000,
    );
  }


}
