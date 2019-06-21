'use strict';
import {androidBundleversion, iosBundleVersion} from '../../package';
import {React, AxFetch, Component} from 'rn-curiosity'

/**
 * 其他工具类
 */
export class CustomTools {

    static downLoad(url) {
        AxFetch.downloadFile(url, 'get', {}, (res) => {
            console.log(res)


        }, (error) => {
            console.log(error)
        })
    }

    /**
     * GET 请求
     * @param url
     * @param callBack
     * @constructor
     */
    static GET(url, callBack) {
        AxFetch.fetch(url, 'get', {}, (response) => {
            console.log(response)
            return callBack(response.data);
        }, (error) => {
            Utils.ToastInfo('网络异常')
            console.log(error)
        })
    }


    /**
     * DElETE 请求
     * @param url
     * @param callBack
     * @constructor
     */
    static DElETE(url, callBack) {
        AxFetch.fetch(url, 'delete', {}, (response) => {
            console.log(response)
            return callBack(response.data);
        }, (error) => {
            Utils.ToastInfo('网络异常')
            console.log(error)
        })
    }

    /**
     * POST 请求
     * @param url
     * @param params  参数   json
     * @param callBack
     * @constructor
     */
    static POST(url, params, callBack) {
        AxFetch.fetch(url, 'post', params, (response) => {
            console.log(response)
            return callBack(response.data);
        }, (error) => {
            Utils.ToastInfo('网络异常')
            console.log(error)
        })
    }

    /**
     * PUT 请求
     * @param url
     * @param params 参数   json
     * @param callBack
     * @constructor
     */
    static PUT(url, params, callBack,) {
        AxFetch.fetch(url, 'put', params, (response) => {
            console.log(response)
            return callBack(response.data);
        }, (error) => {
            Utils.ToastInfo('网络异常')
            console.log(error)
        })
    }

    static allArePassWord(passWord) {
        // passWord = passWord.replace(/[^a-z0-9]/igm, '' + '');
        return passWord;
    }

    static checkPhone(mobileNum) {
        return mobileNum.match("0?(13|14|15|16|17|18|19)[0-9]{9}");
    }


}