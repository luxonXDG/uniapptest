<template>
	<view>
		<view class="erweima">
			<image src="../../static/img/erweima.jpg" mode=""></image>
		</view>
		<view class="banben">
			用户端V1.1
		</view>
		<view class="footer">
			已安装最新版本
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
			
		}
	}
</script>

<style>
.erweima{
	width: 200px;
	height: 200px;
	margin: 40px auto;
}
.erweima image{
	
	width: 200px;
	height: 200px;
}
.banben{
	width: 100%;
	height: 40px;
	font-size: 13px;
	line-height: 40px;
	color: #CACACC;
	text-align: center;
}
.footer{
	margin: 30px auto;
	height: 30px;
	text-align: center;
	line-height: 30px;
	width: 120px;
	border: 1px solid #CACACC;
	border-radius: 5px;
	font-size: 13px;
	color: #CACACC;
}
</style>
