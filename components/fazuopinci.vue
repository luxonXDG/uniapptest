<template>
	<view>
		<view  v-for="(item,i) in neirong" :key='i'>
			<view class="title">
				<view>
					<text>发作次数</text>
					<text class="color">{{item.iszhenduan}}</text>
				</view>
				<view>
					<text>发作频率</text>
					<text>局灶性异常--左顶叶、左右枕叶 </text>
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
					iszhenduan: "15",
					fazuoleixing: "局灶性-- 复杂感觉（幻觉或错觉）、负性肌阵挛",
					zuohezheng: "婴幼儿期--婴儿癫痫伴游走性局灶性发作、婴儿痉挛症"
				}]
			};
		}
	}
</script>

<style>
	.color{
		color: #939999;
		font-size: 28rxp;
	}
	.title{
		border-bottom: 2rpx #CACCCB solid;
	}
	.title>view:nth-of-type(1){
		display: flex;
		justify-content: space-between;
		padding: 20rpx 20rpx;
	}
	.title>view:nth-of-type(2){
		padding: 20rpx 20rpx;
		color: #939999;
	}
	.title>view:nth-of-type(2)>view:nth-of-type(1){
		margin-bottom: 20rpx;
	}
	.title>text:nth-of-type(2){
		color: #939999;
	}
	.body{
		padding: 20rpx 20rpx;
		border-bottom: 2rpx #CACCCB solid;
	}
	.body>view:nth-of-type(2)>view{
		padding: 20rpx 0;
		display: flex;
		justify-content: space-between;
		font-size: 26rpx;
		color: #939999;
	}
	.kuandu>view:nth-of-type(1){
		width: 250rpx;
	}
</style>
