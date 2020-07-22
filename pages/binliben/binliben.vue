<template>
	<view class="content">
		<view class="head">
			<view class="headFlex">
				<view class="headImg">
					<image :src="list.headImg"></image>
				</view>
				<view class="headtext">
					<view>{{list.name}}</view>
					<view>{{list.bingqing}}</view>
				</view>
			</view>
			<view>
				<text>性别：{{list.sex}}</text>
				<text>年龄：{{list.age}}</text>
				<text>城市：{{list.city}}</text>
			</view>
			<view>
				确诊医院：{{list.quezhenyiyuan}}
			</view>
			<view>
				确诊时间：{{list.quezhentime|date}}
			</view>
			<view class="wanshanxinxi">
				<text v-if="list.name!=''&&
				list.sex!=''&&
				list.age!=''&&
				list.headImg!=''&&
				list.city!=''&&
				list.quezhenyiyuan!=''&&
				list.bingqing!=''&&
				list.quezhentime!=''">信息已完善</text>
				<text v-else style="color: #FF0000;">
					信息未完善
				</text>
			</view>
			<view class="bingli">
				<navigator url="../wanzhengbingli/wanzhengbingli">
					查看完整病历
				</navigator>
			</view>
		</view>
		<view class="main">
			<view class="main-title1">
				<view>症状变化</view>
				<view>
					<navigator url="../wanzhengzhengzhuang/wanzhengzhengzhuang">
						查看完整症状
					</navigator>
				</view>
			</view>
			<view class="main-echarts1">
				<image src="../../static/img/echart1.png" mode=""></image>
			</view>
			<view class="main-title2">
				<view>发作频次</view>
				<view>
					<navigator url="../fazuopinci/fazuopinci">
						查看完整频次
					</navigator>
				</view>
			</view>
			<view class="main-echarts2">
				<image src="../../static/img/e.png" mode=""></image>
			</view>
		</view>
	</view>
	</view>
</template>

<script>
	import * as echarts from 'echarts'
	import mpvueEcharts from 'mpvue-echarts'
	export default {
		data() {
			return {
				list: {
					headImg: "",
					name: "",
					bingqing: "癫痫一期患者",
					sex: "",
					age: "",
					city: "",
					quezhenyiyuan: "北京癫痫病医院",
					quezhentime: ""
				},
			}
		},
		methods: {
			onNavigationBarButtonTap(val) {
				console.log(val)
				uni.navigateTo({
					url: '../jilujiuzhen/jilujiuzhen'
				})
			},
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
		onLoad: function() {
			var theList = this.list
			uni.getStorage({
				key: 'loginData',
				success: function(res) {
					//console.log(res.data)
					uni.request({
						url: 'http://39.106.80.215/healthproject/sickuser/user/userPatientInfo',
						method: "GET",
						header: {
							"Content-Type": "application/json;charset=utf-8",
							"token": res.data
						},
						success: function(res) {
							console.log(res.data.data)
							theList.name = res.data.data.patientNick
							theList.city = res.data.data.cityName
							if (res.data.data.patientSex == 1) {
								theList.sex = '男'
							} else {
								theList.sex = '女'
							}
							theList.headImg = res.data.data.loginHeadImg
							theList.age = res.data.data.bindTotalDay
							theList.quezhentime = res.data.data.patientBirthday
						},
						fail: function(res) {
							console.log("上传失败 原因：" + res)
						}
					})
				}
			})
		}
	}
</script>

<style>
	.content {
		padding: 20rpx;
		background-color: #F2F2F2;
		font-size: 30rpx;
		color: #323433;
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
		padding: 20rpx;
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

	.wanshanxinxi {
		position: absolute;
		right: 40rpx;
		top: 40rpx;
		font-size: 28rpx;
		color: #007AFF;
	}

	.bingli {
		color: #007AFF;
		display: flex;
		justify-content: flex-end;
		font-size: 28rpx;
	}

	.main-title1 {
		margin-top: 40rpx;
		display: flex;
		justify-content: space-between;
	}

	.main-title1 view:nth-of-type(2) {
		padding-right: 20rpx;
		color: #007AFF;
		font-size: 28rpx;
	}

	.main-title2 {
		margin-top: 40rpx;
		display: flex;
		justify-content: space-between;
		margin-bottom: 20rpx;
	}

	.main-title2 view:nth-of-type(2) {
		padding-right: 20rpx;
		color: #007AFF;
		font-size: 28rpx;
	}

	.main-echarts1 {
		width: 100%;
		padding: 20rpx;
		margin-left: 30rpx;
		margin-top: 20rpx;
		height: 600rpx;
		margin-bottom: 10rpx;
	}
	
	.main-echarts2 {
		width: 100%;
		padding: 20rpx;
		height: 500rpx;
		background-color: #ffffff
	}
</style>
