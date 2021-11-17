## 概述
Android/IOS活体检测 (眨眼，摇头，点头，张嘴，远近)，前后端结合，确保活体检测结果安全可靠。(***可用于实人认证***，SDK不联网)
## 演示视频
![](https://open.esandcloud.com/share/index.php/s/ayVJ7bjv9w6rC5P/download?path=%2Fefaceid&files=esfaceid.gif)

## 插件API接口说明

#### android 调用初始化
```java
/**
 * SDK初始化。为了提升性能，建议在在application提前调用，否则获取token时间会比较长
 */
LivingDetectionModule.Init();
 ```

#### 认证初始化
```java
/**
 * 认证初始化
 * @param options(JSONObject), 包括如下字段：
 *     livingType：认证类型  1：远近，2：眨眼，3：摇头，4: 点头，5:张嘴，7:高性能远近，8：高性能摇头，9：高性能点头，可以是活体组合，如：123--先远近，后眨眼，后摇头，活体组合最多四个
 *     textColor：界面样式-字体颜色
 *     progressColor：界面样式-进度条颜色
 *     progressBgColor：界面样式-进度条背景颜色
 *     progressStaGradient：界面样式-进度条渐变开始颜色
 *     progressEndGradient：界面样式-进度条渐变结束颜色
 *     backGroundColor：界面样式-页面背景颜色
 *     circleBackWidth：界面样式-进度条宽度
 * @return livingDetectResult 对象包括如下几个字段
 * {
 *		"code": ”ELD_SUCCESS“, -- ELD_SUCCESS：成功，ELD_FAILED：失败，ELD_PARAME_ERROR：参数异常，ELD_EXCEPTION：发生异常，ELD_UNSUPPORT：不支持此活体类型
 * 		"msg":”成功“, -- 执行结果描述
 * 		"data": "......" -- 执行结果数据
 * }
 */
 livingDetectResult LivingDetectionModule.verifyInit(options);
 ```

 #### 发起活体认证
 ```java
/*
 * 执行活体认证
 * @param options(JSONObject), 包括如下字段：
 *     token：认证初始化服务器端返回的数据
 * @param callback 执行结果回调，传入参数为对象 livingDetectResult 对象包括如下几个字段
 * {
 *		"code": ”ELD_SUCCESS“, -- ELD_SUCCESS：成功，ELD_FAILED：失败，ELD_PARAME_ERROR：参数异常，ELD_EXCEPTION：发生异常，ELD_TIMEOUT：执行超时，ELD_PERMISSION：无法获取相机授权，ELD_CANCEL: 用户主动退出
 * 		"msg":”成功“, -- 执行结果描述
 * 		"data": "......" -- 执行结果数据
 * 		"token": "" -- 本次认证token
 * }
 */
LivingDetectionModule.startLivingDetect(options, callback);
```

## 其他信息
1. 完整接入文档：[https://esandinfo.yuque.com/books/share/ba12bf8a-aead-48d5-ad01-be959670af6f?#](https://esandinfo.yuque.com/books/share/ba12bf8a-aead-48d5-ad01-be959670af6f?#)
2. 服务器端协议文档：[https://market.aliyun.com/products/57124001/cmapi00046021.html#sku=yuncode4002100001](https://market.aliyun.com/products/57124001/cmapi00046021.html#sku=yuncode4002100001)
3. 后端管理控制台地址: [http://openali.esandcloud.com](http://openali.esandcloud.com)
4. 技术支持
```
微信：esand_info
qq: 3626921591
电话：18033076802
邮箱：ruide.li@esandinfo.com
```
![wechatqrcode](http://open.esandcloud.com/share/index.php/s/hzT4Gb0BN81svae/download)
