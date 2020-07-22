<template>
	<view>
		<view class="logo">
			<image src="../../static/img/logo150X150png.png"></image>
		</view>
		<view class="app_name">罗德医疗中心</view>
		<view class="zhuce_input">
			<form>
				<view>
					<input type="number" placeholder="请输入手机号" v-model="username"/>
				</view>
				<view class="mima">
					<input type="password" placeholder="请输入密码" v-model="pwd"/>
				</view>
				<view class="zhuce_btn">
					<button class="yanzhen_btn" @tap="login">登 录</button>
				</view>
			</form>
			<view class="denglu_tiaozhuan">
				<view>
					<navigator url="../zhuce/zhuce">
						<view>立即注册</view>
					</navigator>
				</view>
				<view>忘记密码</view>
			</view>
		</view>
		<view class="footer">
			<view class="footer_xian"></view>
			<view class="footer_wenzi">第三方登录</view>
			<view class="img" @click="loginweixin">
				<image src="../../static/zhuce/weixin.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username:'',
				pwd:''
			}
		},
		methods: {
			login () {
				console.log(this.username)
				console.log(this.pwd)
				uni.request({
					url:"http://39.106.80.215/healthproject/sickuser/user/login",
					method:"POST",
					data:{
						password:this.pwd,
						username:this.username
					},
					success: (res) => {
						if(res.data.code==200){
							console.log("登录成功")
							var loginData = res.data.data
							console.log(res)
							uni.setStorage({
								key:"loginData",
								data:loginData,
								success:function(){
									console.log('success');
								},
								fail:function(res){
									console.log(res)
								}
							})
							uni.reLaunch({
							    url: '/pages/index/index'
							});
						}
						else{
							uni.showModal({
							    content: '账号或密码错误',
							    success: function (res) {
							        if (res.confirm) {
							            console.log('用户点击确定');
							        } else if (res.cancel) {
							            console.log('用户点击取消');
							        }
							    }
							});
						}
					}
				})
			},
			loginweixin (){
				uni.navigateTo({
					url:'../sanfangdenglu/sanfangdenglu'
				})
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

	.zhuce_input {
		/* border: 1px solid red; */
		margin: 0 15px 0 15px;
	}

	.zhuce_input input {
		border-bottom: 1px solid #cacccc;
		padding: 10px;
		font-size: 15px;
		margin-bottom: 10px;
	}


	.app_name {
		text-align: center;
		margin-bottom: 20rpx;
		margin-top: 10rpx;
		font-size: 40rpx;
		color: #939999;
	}

	.zhuce_btn button {
		background-color: #3DCCB4;
		color: #fff;
		margin-top: 15px;
		font-size: 15px;
	}

	.footer {
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 200px;

	}

	.denglu_tiaozhuan {
		display: flex;
		justify-content: space-between;
		font-size: 15px;
		margin: 10px 5px 0 5px;
		color: #939998;
	}

	.yanzhen_btn::after {
		border: none;
	}

	.footer_xian {
		border-bottom: .5px solid #CACCCC;
		height: 10px;
		padding-top: 30px;
		margin: 0 15px 0 15px;
	}

	.footer_wenzi {
		font-size: 15px;
		width: 100px;
		height: 20px;
		text-align: center;
		position: absolute;
		top: 30px;
		left: 50%;
		transform: translate(-50%);
		z-index: 1;
		background-color: #fff;
		font-size: 14px;
		color: #939998;
	}

	.img {
		margin-top: 30px;
		text-align: center;
	}

	.img image {
		width: 60px;
		height: 60px;
	}
</style>
