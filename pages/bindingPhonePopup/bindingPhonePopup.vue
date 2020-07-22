<template>
	<view>
		<view class="popup_input">
			<view>
				<input type="number" placeholder="请输入手机号" v-model="shoujihao"/>
			</view>
			<view class="yanzhen">
				<input type="number" placeholder="请输入验证码" v-model="yanzhengma"/>
				<button class="yanzhen_btn" size="mini">发送验证码</button>
			</view>
			<view class="mima">
				<input type="password" placeholder="请输入密码" v-model="pwd"/>
			</view>
			<view class="popup_btn">
				<button class="yanzhen_btn" @click="bangding">完成绑定</button>
			</view>
		
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				shoujihao:'',
				yanzhengma:'',
				pwd:''
			}
		},
		methods: {
			bangding:function(){
				console.log(this.shoujihao)
				console.log(this.yanzhengma)
				console.log(this.pwd)
			}
		}
	}
</script>

<style scoped>
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
