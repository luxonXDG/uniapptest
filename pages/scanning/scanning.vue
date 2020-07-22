<template>
	<view>
		<view class="registerDiagram">
			<image src="../../static/zhuce/chushi.png" mode=""></image>
		</view>
		<view class="popup_input">
			<view>
				<input type="number" placeholder="请输入手机号" />
			</view>
			<view class="yanzhen">
				<input type="number" placeholder="请输入验证码" />
				<button class="yanzhen_btn" size="mini">发送验证码</button>
			</view>
			<view class="mima">
				<input type="password" placeholder="请输入密码" />
			</view>
			<view class="popup_btn">
				<button class="yanzhen_btn" @click="zhuce()">注册</button>
			</view>
		
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
			zhuce:function() {
				uni.showModal({
				    content: '恭喜注册成功，赶快前往下载页面下载APP吧!-.-',
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
	}
</script>

<style scoped>
	.registerDiagram image{
		width: 100%;
	}
.popup_input {
		/* border: 1px solid red; */
		margin: 0 15px 0 15px;
	}

	.popup_input input {
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

	.popup_btn button {
		background-color: #3DCCB4;
		color: #fff;
		margin-top: 15px;
		font-size: 15px;
	}
</style>
