'use strict';
import { androidBundleversion, iosBundleVersion } from '../../package';
import { Utils, RNFetchBlob } from 'rn-curiosity';

const Header = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

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
    RNFetchBlob.fetch('GET', url, Header)
      .then((response) => {
        console.log(response);
        Utils.loadingHide();
        return callBack(response.data === '' ? null : JSON.parse(response.data));
      }).catch((error) => {
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
    RNFetchBlob.fetch('DElETE', url, Header)
      .then((response) => {
        console.log(response);
        Utils.loadingHide();
        return callBack(JSON.parse(response.data));
      }).catch((error) => {
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
    this.fetchBlob(url, params, 'POST', (success) => {
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
    this.fetchBlob(url, params, 'PUT', (success) => {
      return callBack(success);
    }, (error) => {
      console.log(error);
    });
  }

  static fetchBlob(url, params, method, callBack, errorCallBack) {
    console.log(method + ' Url=>' + url);
    RNFetchBlob.fetch(method, url, Header, JSON.stringify(params))
      .then((response) => {
          console.log(response);
          Utils.loadingHide();
          if (response.respInfo.status === 200) {
            return callBack(eval('(' + response.data + ')'));
          } else {
            Utils.ToastInfo('网络异常');
          }
          return callBack(eval('(' + response.data + ')'));
        },
      ).catch((error) => {
        Utils.loadingHide();
        Utils.ToastInfo('网络异常');
        return errorCallBack(error);
      },
    );

  }

  static allArePassWord(passWord) {
    // passWord = passWord.replace(/[^a-z0-9]/igm, '' + '');
    return passWord;
  }

  static checkPhone(mobileNum) {
    return mobileNum.match('0?(13|14|15|16|17|18|19)[0-9]{9}');
  }


}
