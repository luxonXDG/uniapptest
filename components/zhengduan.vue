<template>
	<view>
		<view  v-for="(item,i) in neirong" :key='i'>
			<view class="title">
				<text>诊断</text>
				<text>{{item.iszhenduan}}</text>
			</view>
			<view class="body">
				<view>诊断内容</view>
				<view>
					<view class="kuandu">
						<view>发作类型：</view>
						<view>{{item.fazuoleixing}}</view>
					</view>
					<view class="kuandu">
						<view>综合征：</view>
						<view>{{item.zuohezheng}}</view>
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
					iszhenduan: "是",
					fazuoleixing: "局灶性-- 复杂感觉（幻觉或错觉）、负性肌阵挛",
					zuohezheng: "婴幼儿期--婴儿癫痫伴游走性局灶性发作、婴儿痉挛症"
				}]
			};
		}
	}
</script>

<style>
	.title{
		display: flex;
		justify-content: space-between;
		padding: 20rpx 20rpx;
		border-bottom: 2rpx #CACCCB solid;
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
