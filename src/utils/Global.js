import { Colors, Url, CustomConstant } from './CustomConstant';
import { CustomTools } from './CustomTools';
import { Constant, Utils, FontSize, Overlay } from 'rn-waya';

if (!__DEV__) {
  global.console = {
    log: () => {
    },
    warn: () => {
    },
    error: () => {
    },
  };
}

// 系统是18:9屏幕
global.Comprehensive_Screen = Utils.phoneFit();
//全机型屏幕高度
global.Screen_Height = Utils.phoneFitHeight();
// 系统是iOS
global.IOS = Constant.IOS;
// 系统是安卓
global.Android = Constant.Android;
// 实际屏幕高度
global.ActualScreen_Height = Constant.ActualScreen_Height;
// 获取屏幕宽度
global.Screen_Width = Constant.Screen_Width;
// 获取屏幕分辨率
global.Screen_Scale = Constant.Screen_Scale;
Utils.getStorage(); //初始化数据储存
global.Colors = Colors; // 常用颜色
global.TextSize = FontSize; // 常用字体大小
global.Url = Url; // 网络Api
global.CustomConstant = CustomConstant; // 固定值
global.Tools = CustomTools; //工具类
global.Overlay = Overlay; //浮层
