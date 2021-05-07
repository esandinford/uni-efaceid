## 概述
Android/IOS活体检测 (眨眼，摇头，点头，张嘴)，前后端结合，确保活体检测结果安全可靠。(SDK不联网)

## 插件API接口说明
#### 认证初始化
```java
/**
 * 认证初始化
 * @param options(JSONObject), 包括如下字段：
 *     livingType：认证类型   目前只支持 2 眨眼检测
 * @return livingDetectResult 对象包括如下几个字段
 * {
 *		"code": ”ELD_SUCCESS“,    -- ELD_SUCCESS：成功，ELD_FAILED：失败，ELD_PARAME_ERROR：参数异常，ELD_EXCEPTION：发生异常
 * 		"msg":”成功“, -- 执行结果描述
 * 		"data": "......" -- 执行结果数据
 * }
 */
 livingDetectResult LivingDetectionModule.authInit(options);
 ```

 #### 发起活体认证
 ```java
/*
 * 执行活体认证
 * @param options(JSONObject), 包括如下字段：
 *     token：认证初始化服务器端返回的数据
 * @param callback 执行结果回调，传入参数为对象 livingDetectResult 对象包括如下几个字段
 * {
 *		"code": ”ELD_SUCCESS“,    -- ELD_SUCCESS：成功，ELD_FAILED：失败，ELD_PARAME_ERROR：参数异常，ELD_EXCEPTION：发生异常，ELD_TIMEOUT：执行超时，ELD_PERMISSION：无法获取相机授权
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
