'use strict';
import {RNFetchBlob, Utils,Component} from "rn-curiosity"

/**
 * 网络请求
 */
const Header = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
};

export default class FetchBlob {

    /**
     *  GET 请求
     * @param url    请求url
     * @param callBack  回调方法
     * @returns {Promise.<void>}
     * @constructor
     */
    static GET(url, callBack) {
        RNFetchBlob.fetch('GET', url, Header)
            .then((response) => {
                console.log(response)
                Utils.loadingHide()
                return callBack(response.data === '' ? null : JSON.parse(response.data));
            }).catch((error) => {
            Utils.loadingHide()
            Utils.ToastInfo('网络异常')
            console.log(error)
        });
    }


    /**
     *  DElETE 请求
     * @param url    请求url
     * @param callBack  回调方法
     * @returns {Promise.<void>}
     * @constructor
     */
    static DElETE(url, callBack) {
        RNFetchBlob.fetch('DElETE', url, Header)
            .then((response) => {
                console.log(response)
                Utils.loadingHide()
                return callBack(JSON.parse(response.data));
            }).catch((error) => {
            Utils.loadingHide()
            Utils.ToastInfo('网络异常')
            console.log(error)
        });
    }

    /**
     * POST 请求
     * @param url
     * @param params  参数   json
     * @param callBack
     * @returns {Promise.<*>}
     * @constructor
     */
    static POST(url, params, callBack) {
        this.fetchBlob(url, params, 'POST', (success) => {
            return callBack(success);
        }, (error) => {
            console.log(eval(error))
        })
    }

    /**
     * PUT 请求
     * @param url
     * @param params  参数   json
     * @param callBack
     * @returns {Promise.<*>}
     * @constructor
     */
    static PUT(url, params, callBack,) {
        this.fetchBlob(url, params, 'PUT', (success) => {
            return callBack(success);
        }, (error) => {
            console.log(error)
        })
    }

    static fetchBlob(url, params, method, callBack, errorCallBack) {
        console.log(method + " Url=>" + url);
        RNFetchBlob.fetch(method, url, Header, JSON.stringify(params))
            .then((response) => {
                    console.log(response)
                    Utils.loadingHide()
                    return callBack(eval('(' + response.data + ')'));
                }
            ).catch((error) => {
                Utils.loadingHide()
                Utils.ToastInfo("网络异常")
                return errorCallBack(error)
            }
        )

    }


}