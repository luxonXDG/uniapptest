<template>
	<view>
		<!-- 诊疗活动 -->
		<view class="main-content-zhenliao">
			<view v-for="(item,i) in zhenliao" :key="i">
				<view class="zhengliaoLeft">
					<view>{{item.time}}</view>
					<view>{{item.place}}</view>
				</view>
				<view class="zhengliaoRight">
					<view>{{item.zhuangtai}}</view>
				</view>
			</view>
		</view>
		<view class="more">
			<view>
				<navigator url="../more/more">
					查看更多
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				zhenliao: [{
						time: "2017-12-22 09:12:00 诊疗活动",
						place: "地点：北京第一癫痫医院",
						zhuangtai: "报名中"
					},
					{
						time: "2017-12-22 09:12:00 诊疗活动",
						place: "地点：北京第一癫痫医院",
						zhuangtai: "报名中"
					},
					{
						time: "2017-12-22 09:12:00 诊疗活动",
						place: "地点：北京第一癫痫医院",
						zhuangtai: "报名中"
					},
					{
						time: "2017-12-22 09:12:00 诊疗活动",
						place: "地点：北京第一癫痫医院",
						zhuangtai: "报名中"
					}
				]
			};
		}
	}
</script>

<style>
	.main-content-zhenliao {
		font-size: 30rpx;
		padding: 20rpx 40rpx;
		box-sizing: content-box;
	}
	
	.main-content-zhenliao>view {
		background-color: #ffffff;
		width: 100%;
		display: flex;
		justify-content: space-between;
		line-height: 80rpx;
		padding: 20rpx 0;
		border-bottom: #CACCCB 2rpx solid;
		color: #323433;
		font-size: 32rpx;
	}
	.zhengliaoRight{
		color: #FF0000;
	}
	.main-content-huanjiao {
		font-size: 30rpx;
		padding: 20rpx 40rpx;
		box-sizing: content-box;
	}
	
	.main-content-huanjiao>view {
		background-color: #ffffff;
		width: 100%;
		display: flex;
		justify-content: space-between;
		line-height: 80rpx;
		padding: 20rpx 0;
		border-bottom: #CACCCB 2rpx solid;
		color: #323433;
		font-size: 32rpx;
	}
	
	.more {
		font-size: 30rpx;
		float: right;
		margin-right: 30rpx;
		color: #007AFF;
	}
</style>
