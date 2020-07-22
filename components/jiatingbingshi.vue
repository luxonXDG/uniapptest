<template>
	<view>
		<view class="main" v-for="(item,i) in list" :key="i">
			<view class="flex">
				<text>家庭病</text>
				<text v-if="item.isjiatingbing" class="color">是</text>
				<text v-else class="color">否</text>
			</view>
			<view>
				<view>
					<view>家庭病名称</view>
					<view class="color padding">{{item.mingcheng}}</view>
				</view>
			</view>
			<view class="flex">
				<text>是否结婚</text>
				<text v-if="item.isjiehun" class="color">是</text>
				<text v-else class="color">否</text>
			</view>
			<view class="flex">
				<text>是否生育</text>
				<text v-if="item.isshengyu" class="color">是</text>
				<text v-else class="color">否</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[{
					isjiatingbing:true,
					mingcheng:"癫痫病",
					isjiehun:true,
					isshengyu:false
				}]
			};
		}
	}
</script>

<style>
	.color{
		color: #939999;
	}
	.main>view{
		padding: 20rpx 0;
		border-bottom: 1rpx solid #CACCCB;
	}
	.flex{
		display: flex;
		justify-content: space-between;
	}
	.padding{
		padding-top: 20rpx;
	}
</style>
