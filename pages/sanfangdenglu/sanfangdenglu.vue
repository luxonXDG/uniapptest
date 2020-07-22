<template>
	<view>
		<view class="logo">
			<image src="../../static/img/logo150X150png.png"></image>
		</view>
		<view class="app_name">罗德医疗中心</view>
		<view class="con">
			<view>登陆后开发者将获得以下权限</view>
			<view>· 获得您的公开信息（昵称、图像等）</view>
		</view>
		<view class="wxdl_btn">
			<button type="default" class="querendl" @click="weixilougin">确认登录</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			
			}
		},
		methods: {
			weixilougin:function(){
				uni.login({
				  provider: 'weixin',
				  success: function (loginRes) {
				    console.log(loginRes.authResult);
				    // 获取用户信息
				    uni.getUserInfo({
				      provider: 'weixin',
				      success: function (infoRes) {
				        console.log('用户昵称为：' + infoRes.userInfo.nickName);
						console.log(infoRes.userInfo)
						uni.showModal({
							content:'您好'+' '+infoRes.userInfo.nickName+' '+'是否选择使用微信快速登录',
							success:function(res){
								if(res.confirm){
									uni.showModal({
										content:'该版本暂不支持微信快捷登录'
									})
								}
							}
						})
				      }
				    });
				  }
				});
			}
		}
	}
</script>

<style scoped>
	.logo {
		text-align: center;
		padding-top: 60px;
	}

	.logo image {
		margin-top: 10px;
		margin-bottom: 10px;
		width: 75px;
		height: 75px;
	}

	.app_name {
		text-align: center;
		margin-bottom: 10px;
	}

	.con {
		border-top: 1px solid #CACCCC;
		margin: 25px 25px 0 25px;
		font-size: 15px;
	}

	.con view:nth-of-type(1) {
		padding: 15px 0 10px 0;
	}

	.con view:nth-of-type(2) {
		color: #939998;
		padding: 0 0 0 5px;
	}

	.wxdl_btn {
		position: absolute;
		width: 290px;
		bottom: 120px;
		left: 50%;
		transform: translate(-50%);

	}

	.querendl {
		background-color: #3DCCB4;
		color: #fff;
		font-size: 15px;
	}

	.querendl::after {
		border: none;
	}
</style>
