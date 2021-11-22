<template>
  <view>
    <view align="center">
      <image class='esand_logo' src="../../static/esand_logo.png"></image>
    </view>
	<view>
		<checkbox-group class="es_checkboxContainer" @change="changeCheck">
			<template  v-for="livingType in supportLivingTypeList">
				<checkbox class="es_checkbox"  :value = "livingType.livingType" :checked="livingType.checked">{{livingType.title}}</checkbox>
			</template>
		</checkbox-group>
	</view>
    <view>
		<p class="es_tip"><span>当前选择的活体类型:</span><span>{{choiceLivingType}}</span></p>
	</view>
    <view class="btn-row">
      <button type="primary" class="primary item" @tap="startVerify()">发起活体检测</button>
    </view>
  
    <div align="center">
      <textarea :value="msg"/>
    </div>
  </view>
</template>

<script>
  const livingDetection = uni.requireNativePlugin("Esand-LivingDetection");
  // TODO 替换成您自己的APPCODE(切勿泄漏), 如何获取APPCODE,可参考：https://esandinfo.yuque.com/docs/share/13ad611e-b9c3-4cf8-a9a8-fe23a419312e?#
  const APPCODE = '替换为你的appcode';
  export default {
    data() {
      return {
		supportLivingTypeList:[
			{livingType:1,title:"远近",checked:false},
			{livingType:2,title:"眨眼",checked:false},
			{livingType:3,title:"摇头",checked:false},
			{livingType:4,title:"点头",checked:false},
			{livingType:5,title:"张嘴",checked:false}],
        msg: 'logs',
		choiceLivingType:""
      }
    },
	watch:{
		supportLivingTypeList(){
			console.error(this.supportLivingTypeList);
		}
	},
    methods: {
		changeCheck:function(e){
			let currentChoice = e.target.value;
			let choice = "";
			for(let i = 0;i<currentChoice.length;i++){
				choice = choice + currentChoice[i];
			}
			this.choiceLivingType = choice;
			console.log(this.choiceLivingType);
			console.log(e);
		},
      startVerify: function(e) {
		  if(this.choiceLivingType == undefined || this.choiceLivingType.length == 0){
			  this.msg = "活体检测类型不能为空";
			  return;
		  }
		  
        /**
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
        let livingDetectResult = livingDetection.verifyInit({"livingType":this.choiceLivingType,
		"progressStaGradient":"#1781b5",
		"progressEndGradient":"#66a9c9",
		"progressBgColor":"#DDDDDD",
		"backGroundColor":"#FFFFFF",
		"textColor":"#222222",
		"progressColor":"#0000FF",
		"circleBackWidth":5});
        if (livingDetectResult.code != 'ELD_SUCCESS') {
          this.msg = '活体检测初始化失败：' + livingDetectResult.msg
          return;
        }
        
        let that = this;
        /**
         * 2. 请求阿里云初始化接口获取token（为了保护APPCODE,次端逻辑应该放在服务器端）
         * 参考文档：https://market.aliyun.com/products/57124001/cmapi00046021.html#sku=yuncode4002100001
         */
        uni.request({
          url: 'https://eface.market.alicloudapi.com/init',
          method: 'POST',
          header: {
            'Authorization': 'APPCODE ' + APPCODE,
            'X-Ca-Nonce': that.randomString(8),  // 防重放攻击
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          },
          data: {
            //初始化接口返回参数
            'initMsg': livingDetectResult.data,
          },
          success: (res) => {
            if (res.data.code != '0000') {
              that.msg = '获取token失败：'+res.data.msg
              return;
            }
            
            /**
             * 3. 发起活体检测
             */
            livingDetection.startLivingDetect({"token":res.data.token},function(livingDetectResult) {
              /**
               * livingDetectResult 对象包括如下几个字段
               * {
               *    "code": ”ELD_SUCCESS“, -- ELD_SUCCESS：成功，ELD_FAILED：失败，ELD_PARAME_ERROR：参数异常，ELD_EXCEPTION：发生异常，ELD_TIMEOUT：执行超时，ELD_PERMISSION：无法获取相机授权，ELD_CANCEL: 用户主动退出
               *    "msg":”成功“, -- 执行结果描述
               *    "data": "......" -- 执行结果数据
               *    "token": "" -- 本次认证token
               * }
               */
              
              /**
               * 4. 请求阿里云获取服务器端活体检测结果（为了保护APPCODE,次端逻辑应该放在服务器端）
               * 参考文档：https://market.aliyun.com/products/57124001/cmapi00046021.html#sku=yuncode4002100001
               */
              uni.request({
                url: 'https://eface.market.alicloudapi.com/verify',
                method: 'POST',
                header: {
                  'Authorization': 'APPCODE ' + APPCODE,
                  'X-Ca-Nonce': that.randomString(8),  // 防重放攻击
                  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                },
                data: {
                  //初始化接口返回参数
                  "token": livingDetectResult.token,
                  'verifyMsg': livingDetectResult.data,
                },
                success: (res) => {
                  that.msg = JSON.stringify(res.data);
                },
				//发生网络请求错误,如appcode不正确
				fail: res => {
					console.error('网络请求失败' + JSON.stringify(res));
					return JSON.stringify(res.data);
				}
              });
            });
          },
		  //发生网络请求错误,如appcode不正确
		  fail: res => {
		  	console.error('网络请求失败' + JSON.stringify(res));
		  	return JSON.stringify(res.data);
		  }
        });
      },
      randomString: function(len) {
      　　len = len || 32;
      　　var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
      　　var maxPos = $chars.length;
      　　var randomStr = '';
      　　for (let i = 0; i < len; i++) {
      　　　　randomStr += $chars.charAt(Math.floor(Math.random() * maxPos));
      　　}
        
        randomStr = 'LDT_' + randomStr;
      　　return randomStr;
      },
      radioChange: function(evt) {
        for (let i = 0; i < this.items.length; i++) {
          if (this.items[i].value === evt.target.value) {
            this.livingType = i+1;
            break;
          }
        }
      }
    }
  }
</script>
<style>
  .content {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .esand_logo {
    margin-top: 100rpx;
    margin-bottom: 100rpx;
    width: 200rpx;
    height: 200rpx;
    align-self: center;
  }

  label {
    display: block;
    margin-top: 10rpx;
  }
  
  .radio-group{
    display: inline-block;  
  }

  textarea {
    margin-top: 20rpx;
    height: 800rpx;
    font-size: small;
  }
  
  .es_checkboxContainer{
	  width: 100vw;
	  display:inline-block;
	  position: relative;
	  text-align: center;
	  display: flex;
	  align-items: center;
	  flex-direction:row;
	  justify-content: space-around;
	  margin: 10px 0px;
  }
  .es_checkbox{
	  display: inline-block;
  }
  .es_tip{
	  margin: 10px 0px;
  }
</style>