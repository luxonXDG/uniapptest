<template>
	<view>
		<view>
			<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" style-type="text" activeColor="#3DCCB4"
			 class="title"></uni-segmented-control>
			<view class="content">
				<view v-if="current === 0">
					<view class="main">
						<view class="mainContent" v-for="i in HuanJiaoArr" :key="i" @click="baoming(i.patientactivityId)">
							<view class="contentTitle">
								<view>{{i.patientactivityTitle}}</view>
								<view v-if="i.signUpState===0" class="red">报名已结束</view>
								<view v-else class="green">报名中</view>
							</view>
							<view class="contentBody">
								<view>{{i.patientactivityDes}}</view>
								<view>主讲医生</view>
								<view>{{i.doctorName}}</view>
								<view>截至报名时间</view>
								<view class="contentfooter">
									<text>{{i.endtime|date}}</text>
									<text v-if="i.isReward===0" class="red">无法获得奖励</text>
									<text v-else class="green">可以获得奖励</text>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view v-if="current === 1">
					<view class="main">
						<view class="mainContent" v-for="i in yibaoming" :key="i">
							<view class="contentTitle">
								<view>{{i.patientactivityTitle}}</view>
								<view class="green">已报名</view>
							</view>
							<view class="contentBody">
								<view>{{i.patientactivityDes}}</view>
								<view>主讲医生</view>
								<view>{{i.doctorName}}</view>
								<view>截至报名时间</view>
								<view class="contentfooter">
									<text>{{i.endtime|date}}</text>
									<text v-if="i.isReward===0" class="red">无法获得奖励</text>
									<text v-else class="green">可以获得奖励</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- <view class="title">
			<view @click="all" id="iamnode" class="sadasdsadasdas">全部</view>
			<view>已报名</view>
		</view>
		<view class="main">
			<view class="mainContent" v-for="(item,i) in list" :key="i">
				<view class="contentTitle">
					<view>{{item.zhuti}}</view>
					<view>{{item.baoming}}</view>
				</view>
				<view class="contentBody">
					<view>{{item.miaoshu}}</view>
					<view>{{item.zhujiang}}</view>
					<view>{{item.name}}</view>
					<view>{{item.jiezhi}}</view>
					<view class="contentfooter"><text>{{item.time}}</text><text>{{item.jiangli}}</text></view>
				</view>
			</view>
		</view> -->
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
				items: ['全部', '已报名'],
				current: 0,
				list: [],
				HuanJiaoArr: [],
				yibaoming: []
			}
		},
		onLoad: function() {
			var that = this
			uni.getStorage({
				key: "loginData",
				success: function(res) {
					console.log("token获取成功:" + res.data)
					// 全部
					uni.request({
						url: 'http://39.106.80.215/healthproject/SickUser/patientActivity/selectSickPatientActivity?page=1&size=30',
						method: "POST",
						header: {
							token: res.data
						},
						success: function(res) {
							that.list = res.data.data.data
							// 0无奖励 1有奖励    0 未报名 1 已报名 0 报名结束 1 正在报名
							that.xunHuan()
						}
					})
					// 已报名
					uni.request({
						url: 'http://39.106.80.215/healthproject/SickUser/patientActivity/selectSickSignUpPatientActivity?page=1&size=30',
						method: "POST",
						header: {
							token: res.data
						},
						success: function(res) {
							that.yibaoming = res.data.data.data
							console.log(that.yibaoming)
							// 0无奖励 1有奖励    0 未报名 1 已报名 0 报名结束 1 正在报名
						}
					})
				}
			})
		},
		methods: {
			xunHuan() {
				var arr = this.list
				for (let i = arr.length; i > 0; i--) {
					this.HuanJiaoArr.push(arr[i - 1])
					// console.log(arr[i-1])
				}
				// console.log(this.HuanJiaoArr)
			},
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex;
				}
			},
			baoming(id) {
				console.log(id)
				uni.showModal({
					content: '是否报名参加此活动',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
							uni.getStorage({
								key: "loginData",
								success: function(res) {
									uni.request({
										url: 'http://39.106.80.215/healthproject/SickUser/patientActivity/SickSignUpPatientActivity?patientactivityId=' +
											id,
										method: "POST",
										header: {
											token: res.data
										},
										success: function(res) {
											console.log(res)
											if (res.data.code === 500) {
												uni.showModal({
													content: '该活动报名已截止或者活动已结束或已取消，无法报名！',
												})
											}
										}
									})
								}
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			}
		},
		filters: {
			date(time) {
				let date = new Date(time);
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				return year + "-" + month + "-" + day
			}
		},
	}
</script>

<style>
	.mainContent {
		padding: 20rpx;
		border-bottom: #808080 2rpx solid;
	}

	.contentTitle {
		display: flex;
		justify-content: space-between;
		font-size: 30rpx;
		margin-bottom: 20rpx;
		font-weight: bold;
	}

	.contentBody view {
		font-size: 28rpx;
		line-height: 40rpx;
		padding: 10rpx 0;
	}

	.contentfooter {
		display: flex;
		justify-content: space-between;
	}

	.red {
		color: #FF0000;
	}

	.green {
		color: #3DCCB4;
	}
</style>
