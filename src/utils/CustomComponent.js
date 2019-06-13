'use strict';
import {
    Overlay, CenterView, Text, FlatList,
    View,
    ScrollView,
    RefreshControl,
    TouchView,
    CustomImage,
    CustomButton,
    Utils, Pagination, LinearGradient,
    React, Component
} from 'rn-curiosity'

import FastImage from 'react-native-fast-image'

/**
 * 自定义 FastImage
 *
 */
export class CustomFastImage extends Component {
    render() {
        if (this.props.onPress) {
            return (
                <CenterView
                    style={this.props.touchStyle}
                    onPress={this.props.onPress}>
                    }}
                    {this.renderFastImage()}
                </CenterView>
            )
        } else {
            return this.renderFastImage()
        }
    }

    renderFastImage = () => {
        return (
            <FastImage
                {...this.props}
                style={this.props.style}
                source={this.props.source || this.props.url && {uri: this.props.url} || this.props.require && this.props.require}
                resizeMode={this.props.resizeMode || 'contain'}
                onProgress={this.props.onProgress}
                onError={() => {
                    Utils.Toast('图片加载失败')
                }}
            />)
    }
}

/**
 * 自定义 点击按钮
 */
export class CustomView extends Component {
    render() {
        return (
            <TouchView
                {...this.props}>
                {this.props.children}
            </TouchView>
        );
    }
}


/**
 * 自定义 CustomBaseView
 *
 * style  //样式
 */
export class CustomBaseView extends Component {
    render() {
        return (
            <CustomView
                style={[{flex: 1, alignItems: 'center', backgroundColor: Colors.background}, this.props.style]}>
                {this.props.children}
            </CustomView>
        );
    }
}

/**
 * 自定义 CustomPagination
 *
 * style  //样式
 */
export class CustomPagination extends Component {
    render() {
        return (
            <Pagination activeDotIndex={this.props.activeDotIndex} dotsLength={this.props.dotsLength}
                        inactiveDotOpacity={1}
                        containerStyle={{
                            paddingVertical: 10,
                        }}
                        dotStyle={{
                            width: Utils.getWidth(30),
                            height: Utils.getWidth(10),
                            borderRadius: 20,
                            backgroundColor: Colors.blue6B,
                        }}
                        inactiveDotStyle={{
                            width: Utils.getWidth(15),
                            height: Utils.getWidth(15),
                            borderRadius: 20,
                            backgroundColor: Colors.blue9F,
                        }}/>
        );
    }
}


/**
 * 自定义 FlatList
 *
 * onRefresh  //下拉刷新处理方法
 * style  //样式
 * isRefreshing  //刷新状态
 * renderItem
 * onEndReached 距离底部多少距离走方法
 */
export class CustomFlatList extends Component {
    scrollToOffset = (y) => {
        return this.flatList.scrollToOffset({animated: true, offset: y})
    }

    render() {
        if (!this.props.showNo || this.props.data.length > 0) {
            return (
                <FlatList
                    {...this.props}
                    ref={(ref) =>
                        this.flatList = ref
                    }
                    keyExtractor={(item, index) => index.toString()}
                    onEndReachedThreshold={Android ? 0.1 : -0.1}
                    ListFooterComponent={this.props.ListFooterComponent && this.renderFooterView()}
                    showsVerticalScrollIndicator={false}
                    initialNumToRender={10}
                />
            );
        } else {
            return (
                <CenterView style={{
                    flex: 1,
                }}>
                    <CustomImage
                        uri={'icon/no_info_bg.png'}
                        style={{
                            marginBottom: Utils.getHeight(60),
                            width: Utils.getWidth(100),
                            height: Utils.getWidth(101)
                        }}/>
                </CenterView>)
        }
    }

    renderFooterView = () => {
        return (
            <CenterView style={{
                height: Utils.getHeight(40),
                flexDirection: 'row',
            }}>
                <CustomLine width={Screen_Width * 0.3}/>
                <Text style={{color: Colors.gray999}}>{'   到底了   '}</Text>
                <CustomLine width={Screen_Width * 0.3}/>
            </CenterView>
        )
    }
}


/**
 * 自定义 ScrollView
 *
 * onRefresh  //下拉刷新处理方法
 * style  //样式
 * isRefreshing  //刷新状态
 */
export class CustomScrollView extends Component {
    render() {
        return (
            <ScrollView
                {...this.props}
                style={[{
                    width: Screen_Width,
                }, this.props.style,]}
                keyboardShouldPersistTaps={'always'}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                refreshControl={this.props.onRefresh &&
                <RefreshControl
                    refreshing={this.props.refreshing || false}
                    onRefresh={this.props.onRefresh}
                    colors={['rgb(56,169,255)', 'rgb(255,187,56)']}
                    progressBackgroundColor="#ffffff"/>}>
                {this.props.children}
            </ScrollView>
        );
    }
}


/**
 * 自定义 Text
 */
export class CustomText extends Component {
    render() {
        if (this.props.buttonStyle) {
            return (<CustomButton
                buttonStyle={[{
                    width: Utils.getWidth(570),
                    height: Utils.getHeight(80),
                    backgroundColor: Colors.mainRed,
                    borderRadius: this.props.borderRadius || 5
                }, this.props.buttonStyle]}
                textStyle={[{
                    color: Colors.mainWhite,
                    fontSize: TextSize.textSize_16
                }, this.props.textStyle]}
                onPress={this.props.onPress}>
                {this.props.children || 'Button'}
            </CustomButton>)

        } else {
            return (
                <CustomButton
                    buttonStyle={this.props.touchStyle}
                    textStyle={this.props.style}
                    onPress={this.props.onPress}>
                    {this.props.children || 'Button'}
                </CustomButton>
            )
        }
    }
}


/**
 * 自定义 LinearGradientButton
 */
export class LinearGradientButton extends Component {
    render() {
        return (
            <LinearGradient
                {...this.props}
                colors={[Colors.blueStart, Colors.blueEnd]}
                touchStyle={this.props.style}
                style={[{
                    width: Utils.getWidth(570),
                    height: Utils.getHeight(80),
                    borderRadius: this.props.borderRadius || 5
                }]}>
                <Text style={{
                    color: Colors.mainWhite,
                    fontSize: TextSize.textSize_16
                }}>{this.props.children}</Text>
            </LinearGradient>)
    }
}


/*
* 自定义ProgressBar
* */
export class CustomProgressBar extends Component {
    render() {
        return (
            <View style={[{
                borderRadius: 25,
                height: 2,
                width: Screen_Width * 0.7,
                justifyContent: 'center',
                backgroundColor: Colors.background
            }, this.props.style]}>
                <View style={[{
                    position: 'absolute',
                    height: 2,
                    backgroundColor: Colors.mainBlue,
                    borderRadius: 25,
                }, this.props.progressStyle]}/>
            </View>
        )
    }
}


/*
* 自定义line
* */
export class CustomLine extends Component {
    render() {
        return (
            <View style={{
                height: this.props.height ? this.props.height : Utils.getHeight(1),
                backgroundColor: Colors.mainWhite,
                width: this.props.width || Screen_Width
            }}>
                <View style={[{
                    backgroundColor: Colors.background,
                    height: this.props.height ? this.props.height : Utils.getHeight(1),
                    width: '100%'
                }, this.props.style]}/>
            </View>


        )
    }
}



