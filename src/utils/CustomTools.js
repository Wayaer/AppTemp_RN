'use strict';
import {androidBundleversion, iosBundleVersion} from '../../package';
import {React,Component} from 'rn-curiosity'
import fetchBlob from './FetchBlob';

/**
 * 其他工具类
 */
export class CustomTools {
    static GET(url, callBack) {
        console.log("GET Url==>" + url)
        fetchBlob.GET(url, callBack)
    }

    static DElETE(url, callBack) {
        console.log("DElETE Url==>" + url)
        fetchBlob.DElETE(url, callBack)
    }

    static POST(url, params, callBack) {
        fetchBlob.POST(url, params, callBack)
    }

    static PUT(url, params, callBack,) {
        fetchBlob.PUT(url, params, callBack)
    }


    static allArePassWord(passWord) {
        // passWord = passWord.replace(/[^a-z0-9]/igm, '' + '');
        return passWord;
    }

    static checkPhone(mobileNum) {
        return mobileNum.match("0?(13|14|15|16|17|18|19)[0-9]{9}");
    }


}