<template>
	<view>
		<view class="teshuzhiliao">
			<view class="body">
				<view>
					<view class="kuandu">
						<view>是否手术：</view>
						<view>是</view>
					</view>
					<view class="kuandu">
						<view>甲强==激素治疗：</view>
						<view>是</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				neirong: [{
					fazuoleixing: "是",
					zuohezheng: "婴幼儿期--婴儿癫痫伴游走性局灶性发作、婴儿痉挛症"
				}]
			};
		}
	}
</script>

<style>
	.teshuzhiliao .color{
		color: #939999;
		font-size: 28rxp;
	}
	.teshuzhiliao .title{
		border-bottom: 2rpx #CACCCB solid;
	}
	.teshuzhiliao .title>view:nth-of-type(1){
		display: flex;
		justify-content: space-between;
		padding: 20rpx 20rpx;
	}
	.teshuzhiliao .title>view:nth-of-type(2){
		padding: 20rpx 20rpx;
		color: #939999;
	}
	.teshuzhiliao .title>view:nth-of-type(2)>view:nth-of-type(1){
		margin-bottom: 20rpx;
	}
	.teshuzhiliao .title>text:nth-of-type(2){
		color: #939999;
	}
	.teshuzhiliao .body{
		padding: 20rpx 20rpx;
		border-bottom: 2rpx #CACCCB solid;
	}
	.teshuzhiliao .body>view:nth-of-type(1)>view{
		padding: 20rpx 0;
		display: flex;
		justify-content: space-between;
		font-size: 26rpx;
		color: #939999;
	}
	.teshuzhiliao .kuandu>view:nth-of-type(1){
		width: 250rpx;
	}
</style>
