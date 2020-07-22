<template>
	<view id="app">
		<view class="nav">
			<view>
				<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" style-type="text" active-color="#3DCCB4"></uni-segmented-control>
				<view class="content">
					<view v-if="current === 0">
						<view class="zanwu" v-if="isqingkun">暂无健康提醒</view>
						<view v-else>
							<view class="jiankangtishi">
								<view>您已经2天没有写日志了请及时填写</view>
								<view>
									<text>2020-6-18</text>
								</view>
							</view>
							<view class="jiankangtishi">
								<view>您的医生更新了病历请查看</view>
								<view>
									<text>2020-6-12</text>
								</view>
							</view>
							<view class="jiankangtishi">
								<view>唐马儒医生提示您该吃药了，如果已吃请记录！</view>
								<view>
									<text>2020-6-10</text>
								</view>
							</view>
						</view>
					</view>
					<view v-if="current === 1">
						<view class="zanwu" v-if="isqingkun">暂无活动提醒</view>
						<view v-else>
							<view class="jiankangtishi">
								<view>今天有关注的患教活动开始</view>
								<view>
									<text>2020-6-16</text>
								</view>
							</view>
							<view class="jiankangtishi">
								<view>您关注的医生的直播活动已开始</view>
								<view>
									<text>2020-6-14</text>
								</view>
							</view>
						</view>
					</view>
					<view v-if="current === 2">
						<view class="zanwu" v-if="isqingkun">暂无系统提醒</view>
						<view v-else>
							<view class="jiankangtishi">
								<view>请尽快更新到最新的app</view>
								<view>
									<text>2020-6-20</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view>

		</view>
	</view>
</template>
<script>
	import uniSegmentedControl from "@/components/uni-segmented-control/uni-segmented-control.vue"
	export default {
		components: {
			uniSegmentedControl
		},
		data() {
			return {
				items: ['健康提醒', '活动提醒', '系统提醒'],
				current: 0,
				isqingkun:false
			}
		},

		methods: {
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex;
				}
			},
			onNavigationBarButtonTap(val) {
				var that = this
				console.log(val)
				uni.showModal({
					content:"确定清空消息？",
					success:function(res){
						if(res.confirm){
							that.isqingkun=true
						}
					}
				})
			},
		}

	}
</script>

<style>
	.content{
		/* padding: 40rpx; */
	}
	.zanwu{
		font-size: 28rpx;
		color: #CACCCB;
	}
	.jiankangtishi{
		border-bottom: 2rpx solid #CACCCB;
		/* border-top: 6rpx solid #CACCCB; */
		padding: 20rpx 20rpx;
		margin-bottom: 10rpx;

	}
	.jiankangtishi>view:nth-of-type(1){
		margin-top: 20rpx;
		font-size: 30rpx;
	}
	.jiankangtishi>view:nth-of-type(2){
		display: flex;
		justify-content: flex-end;
		font-size: 26rpx;
		color: #CACCCB;
	}
</style>
