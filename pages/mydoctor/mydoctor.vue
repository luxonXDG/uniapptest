<template>
	<view>
		<view class="topbar">
			<view>
				<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" style-type="text" active-color="#3DCDB4"></uni-segmented-control>
				<view class="content">
					<view v-if="current === 0">
						<view class="head" v-for="(item,i) in list" :key="i">
							<view class="btn" @click="guanzhuyisheng(item.doctor_id)">
								<view v-if="item.isFollow===1" class="guanzhu">已关注</view>
								<view v-else>立即关注</view>
							</view>
							<view class="headFlex">
								<view class="headImg">
									<image :src="item.login_headImg"></image>
								</view>
								<view class="headtext">
									<view>{{item.doctor_name}}</view>
									<view>{{item.position_name}}</view>
								</view>
							</view>
							<view>
								所属医院：{{item.hospital_name}}
							</view>
							<view>
								从医经验：主治癫痫10年
							</view>
						</view>
					</view>
					<view v-if="current === 1">
						<view class="head" v-for="(item,i) in list" :key="i" v-if="item.isFollow===1">
							<view class="btn" @click="guanzhuyisheng">
								<view v-if="item.isFollow===1" class="guanzhu">已关注</view>
								<view v-else>立即关注</view>
							</view>
							<view class="headFlex">
								<view class="headImg">
									<image :src="item.login_headImg"></image>
								</view>
								<view class="headtext">
									<view>{{item.doctor_name}}</view>
									<view>{{item.position_name}}</view>
								</view>
							</view>
							<view>
								所属医院：{{item.hospital_name}}
							</view>
							<view>
								从医经验：主治癫痫10年
							</view>
						</view>
					</view>
				</view>
			</view>
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
				items: ['全部', '我的关注'],
				current: 0,
				list: []
			}
		},
		methods: {
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex;
				}
			},
			guanzhuyisheng(i) {
				console.log(i)
				uni.getStorage({
					key: "loginData",
					success: function(res) {
						// console.log(res.data)
						uni.request({
							url: 'http://39.106.80.215/healthproject/sickuser/user/userFollowDoctor?doctorId=' + i,
							method: "POST",
							header: {
								token: res.data
							},
							success: function(res) {
								console.log(res)
								uni.showModal({
									content:"关注成功"
								})
							}
						})
					}
				})
			}
		},
		
		onLoad: function(options) {
			var that = this
			uni.getStorage({
					key: "loginData",
					success: function(res) {
						// console.log(res.data)
						uni.request({
							url: "http://39.106.80.215/healthproject/sickuser/user/userGetDoctorsList",
							method: "GET",
							header: {
								token: res.data
							},
							data: {
								isFollow: 0
							},
							success: function(res) {
								console.log(res.data.data)
								that.list = res.data.data
							}
						})
					}
				}),
				setTimeout(function() {
					console.log('start pulldown');
				}, 1000);
			//uni.startPullDownRefresh();
			uni.startPullDownRefresh({
				success :function(res) {
					console.log(res); //success 返回参数说明
				}
			}); //这里表示当进入页面的时候就开始执行下拉刷新动画
		},
		onPullDownRefresh() {
			//监听下拉刷新动作的执行方法，每次手动下拉刷新都会执行一次
			console.log('refresh');
			setTimeout(function() {
				uni.stopPullDownRefresh(); //停止下拉刷新动画
			}, 1000);
		}
	}
</script>


<style>
	.content {
		padding: 20rpx;
		font-size: 28rpx;
	}

	.headImg image {
		width: 150rpx;
		height: 150rpx;
		border-radius: 50%;
	}

	.headtext view {
		padding-top: 20rpx;
		padding-left: 20rpx;
	}

	.headFlex {
		display: flex;
	}

	.head {
		background-color: #ffffff;
		padding: 20rpx 20rpx 0 20rpx;
		border-bottom: 2rpx solid #CACCCB;
		margin-bottom: 20rpx;
	}

	.head>view:nth-of-type(2) text:nth-of-type(1) {
		margin-left: 0 !important;
	}

	.head>view:nth-of-type(2) {
		margin-top: 20rpx;
		margin-bottom: 20rpx;
	}

	.head>view:nth-of-type(3) {
		margin-bottom: 20rpx;
	}

	.head>view:nth-of-type(4) {
		margin-bottom: 20rpx;
	}

	.head>view:nth-of-type(2) text {
		margin-left: 80rpx;
	}

	.btn>view {
		position: absolute;
		right: 20rpx;
		padding: 20rpx;
		width: 150rpx;
		background-color: #3DCDB4;
		height: 30rpx;
		text-align: center;
		line-height: 30rpx;
		color: #FFFFFF;
	}

	.guanzhu {
		color: #3DCDB4 !important;
		background-color: #FFFFFF !important;
		border: 1rpx solid #3DCDB4;
	}
</style>
