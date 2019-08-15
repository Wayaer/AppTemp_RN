'use strict';
import { androidBundleversion, iosBundleVersion } from '../../package';
import { Utils, FetchBlob } from 'wayae';

/**
 * 其他工具类
 */
export class CustomTools {


  /**
   * GET 请求
   * @param url
   * @param callBack
   * @constructor
   */
  static GET(url, callBack) {
    FetchBlob.GET(url, (response) => {
      console.log(response);
      Utils.loadingHide();
      return callBack(response.data === '' ? null : JSON.parse(response.data));
    }, (error) => {
      Utils.loadingHide();
      Utils.ToastInfo('网络异常');
      console.log(error);
    });
  }


  /**
   * DElETE 请求
   * @param url
   * @param callBack
   * @constructor
   */
  static DElETE(url, callBack) {
    FetchBlob.DElETE(url, (response) => {
      console.log(response);
      Utils.loadingHide();
      return callBack(JSON.parse(response.data));
    }, (error) => {
      Utils.loadingHide();
      Utils.ToastInfo('网络异常');
      console.log(error);
    });
  }

  /**
   * POST 请求
   * @param url
   * @param params  参数   json
   * @param callBack
   * @constructor
   */
  static POST(url, params, callBack) {
    FetchBlob.POST(url, params, (success) => {
      return callBack(success);
    }, (error) => {
      console.log(eval(error));
    });
  }

  /**
   * PUT 请求
   * @param url
   * @param params 参数   json
   * @param callBack
   * @constructor
   */
  static PUT(url, params, callBack) {
    FetchBlob.PUT(url, params, (success) => {
      return callBack(success);
    }, (error) => {
      console.log(error);
    });
  }


  static allArePassWord(passWord) {
    // passWord = passWord.replace(/[^a-z0-9]/igm, '' + '');
    return passWord;
  }

  static checkPhone(mobileNum) {
    return mobileNum.match('0?(13|14|15|16|17|18|19)[0-9]{9}');
  }


}
