<template>
	<view>
		<view class="logo">
			<image src="../../static/img/logo150X150png.png" mode="widthFix"></image>
		</view>
		<view class="zhuce_input">
			<view>
				<input type="number" placeholder="请输入手机号" v-model="username"/>
			</view>
			<view class="yanzhen">
				<input type="number" placeholder="请输入验证码" v-model="code"/>
				<button class="yanzhen_btn" size="mini" @click="yanzhengma">发送验证码</button>
			</view>
			<view class="mima">
				<input type="password" placeholder="请输入密码" v-model="password"/>
			</view>
			<view class="zhuce_btn">
				<button class="yanzhen_btn" @click="register">立即注册</button>
			</view>

		</view>
		<view class="footer">
			<view class="footer_xian"></view>
			<view class="footer_wenzi">第三方登录</view>
			<view class="img">
				<image src="../../static/zhuce/weixin.png" mode="" @click="weixinlogin"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username:'',
				password:'',
				code:''
			}
		},
		methods: {
			yanzhengma:function(){
				var that = this
				var thephone = this.username
				uni.request({
					url:'http://39.106.80.215/healthproject/sms/sendSms?phone='+thephone,
					method:"POST",
					header:{
						"Content-Type":"application/json;charset=utf-8",
					},
					// data:{
					// 	phone:18398781058
					// },
					success:function(res){
						console.log(typeof thephone)
						console.log(res)
					}
				})
			},
			weixinlogin:function(){
				uni.navigateTo({
					url:'../sanfangdenglu/sanfangdenglu'
				})
			},
			register:function(){
				var that = this
				console.log(this.username)
				console.log(this.password)
				console.log(this.code)
				// console.log(code)
				uni.request({
					url:"http://39.106.80.215/healthproject/sickuser/user/register",
					method:"POST",
					data:{
						code:this.code,
						password:this.password,
						username:this.username,
					},
					fail: (res) => {
						console.log(res)
					},
					success: (res) => {
						console.log(res)
						if(res.data.code===200){
							uni.showModal({
							    content: '注册成功，是否进入登录页面',
							    success: function (res) {
							        if (res.confirm) {
							            console.log('用户点击确定');
										uni.reLaunch({
										    url: '/pages/jibenxinxi/jibenxinxi'
										});
							        } else if (res.cancel) {
							            console.log('用户点击取消');
							        }
							    }
							});
						}
						else{
							uni.showModal({
								content:'验证码错误或账号错误，请重新输入'
							})
						}
					}
				})
			}
		}
	}
</script>

<style scoped>
	.logo {
		text-align: center;
		padding: 100rpx 0;
	}

	.logo image {
		width: 200rpx;
		height: 200rpx;
		height: 210px;
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

	.yanzhen {
		position: relative;
	}

	.yanzhen button {
		position: absolute;
		right: 0;
		top: 5px;
		color: #fff;
		background-color: #3DCCB4;

	}

	.yanzhen_btn::after {
		border: none;
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
