package com.apptemplate;

import android.app.Application;

import com.apptemplate.umeng.common.DplusReactPackage;
import com.apptemplate.umeng.common.RNUMConfigure;
import com.curiosity.NativeTools;
import com.facebook.react.ReactApplication;
import com.RNFetchBlob.RNFetchBlobPackage;
import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;
import com.reactnativecommunity.netinfo.NetInfoPackage;
import com.dylanvann.fastimage.FastImageViewPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.curiosity.CuriosityPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.umeng.commonsdk.UMConfigure;

import java.io.File;
import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        /*
         * bundle加载判断
         * */
        @Override
        protected String getJSBundleFile() {
            if (NativeTools.isBundle(getApplicationContext()) && NativeTools.matchingVersion(getApplicationContext())) {
                File file = new File(NativeTools.getFilesDir(getApplicationContext()) + "/bundle/index.bundle");
                return file.getAbsolutePath();
            } else {
                return super.getJSBundleFile();
            }
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                    new MainReactPackage(),
                    new RNFetchBlobPackage(),
                    new AsyncStoragePackage(),
                    new NetInfoPackage(),
                    new FastImageViewPackage(),
                    new RNGestureHandlerPackage(),
                    new CuriosityPackage(),
                    new DplusReactPackage()
            );
        }

        @Override
        protected String getJSMainModuleName() {
            return "index";
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this, /* native exopackage */ false);
        RNUMConfigure.init(this, "5d1ebdcc0cafb2d8ff000a22", "Umeng", UMConfigure.DEVICE_TYPE_PHONE,null);

    }
}
