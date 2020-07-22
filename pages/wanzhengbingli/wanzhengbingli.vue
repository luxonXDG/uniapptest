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
				绑定日期：{{list.bingling|date}}
			</view>
		</view>
		<view class="main">
			<view class="main-title">
				<view>
					<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" style-type="text" active-color="#3DCCB4"
					 class="title"></uni-segmented-control>
					<view class="content">
						<view v-show="current === 0">
							<view class="jiuyijilu" v-for="(item,i) in jiuzhen" :key="i">
								<view class="jiuyijilu-title">
									<text>第{{i+1}}次就诊</text>
									<text>{{item.visitData|date}}</text>
								</view>
								<view class="jiuyijilu-body" style="font-size: 24rpx;">
									<text>就诊医生：{{item.hospitalName}}</text>
									<text>就诊地点：{{item.doctorName}}</text>
								</view>
							</view>
						</view>
						<view v-show="current === 1" class="xianbingshi">
							<view class="uni-padding-wrap uni-common-mt xianbingshi_2">
								<uni-segmented-control id="nav2" :current="current1" :values="items1" @clickItem="onClickItem1" style-type="text"
								 active-color="#3DCDB4" />
							</view>
							<view class="">
								<view v-if="current1 === 0">
									<view class="right">
										<right1></right1>
									</view>
								</view>
								<view v-if="current1 === 1">
									<fuzhujiancha></fuzhujiancha>
								</view>
								<view v-if="current1 === 2">
									<fazuopinci></fazuopinci>
								</view>
								<view v-if="current1 === 3">
									<yaowuzhiliao></yaowuzhiliao>
								</view>
								<view v-if="current1 === 4">
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
							</view>

						</view>
						<view v-show="current === 2">
							<jiwangbingli></jiwangbingli>
						</view>
						<view v-show="current === 3">
							<jiatingbingshi></jiatingbingshi>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniSegmentedControl from "@/components/uni-segmented-control/uni-segmented-control.vue"
	import right1 from "../../components/zhengduan.vue"
	import jiwangbingli from "../../components/jiwangbingli.vue"
	import jiatingbingshi from "../../components/jiatingbingshi.vue"
	import fuzhujiancha from "../../components/fuzhujiancha.vue"
	import fazuopinci from '../../components/fazuopinci.vue'
	import yaowuzhiliao from '../../components/yaowuzhiliao.vue'
	import teshuzhiliao from '../../components/teshuzhiliao.vue'
	export default {
		components: {
			uniSegmentedControl,
			right1,
			jiwangbingli,
			jiatingbingshi,
			fuzhujiancha,
			fazuopinci,
			yaowuzhiliao,
			teshuzhiliao
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
		data() {
			return {
				items: ['就诊记录', '现病史', '既往病历', '家族病历'],
				items1: ['诊断', '辅助检查', '发作频率', '药物治疗', '特殊治疗'],
				current: 0,
				current1: 0,
				list: {
					headImg: '',
					name: '',
					bingqing: "癫痫一期患者",
					sex: "",
					age: "",
					city: "",
					quezhenyiyuan: "",
					bingling: ""
				},
				wanshanxinxi: "信息已完善",
				jiuzhen: []
			}
		},
		methods: {
			onClickItem(e) {
				// console.log(e)
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex;
				}
			},
			onClickItem1(e) {
				if (this.current1 !== e.currentIndex) {
					this.current1 = e.currentIndex
				}
			},
		},
		onLoad: function() {
			var theList = this.list
			var that = this
			//获取token
			uni.getStorage({
				key: 'loginData',
				success: function(res) {
					console.log(res.data)
					var data = res.data
					// 请求基本信息
					uni.request({
						url: 'http://39.106.80.215/healthproject/sickuser/user/getPatientInfo',
						method: "GET",
						header: {
							"Content-Type": "application/json;charset=utf-8",
							"token": data
						},
						success: function(res) {
							console.log("获取成功")
							console.log(res.data)
							theList.name = res.data.data.patientNick
							theList.city = res.data.data.cityName
							if (res.data.patientSex == 1) {
								theList.sex = '男'
							} else {
								theList.sex = '女'
							}
							theList.headImg = res.data.data.headImg
							theList.age = res.data.data.age
							theList.quezhenyiyuan = res.data.data.hospitalName
							theList.bingling = res.data.data.visitrecordstime
						},
						fail: function(res) {
							console.log("上传失败 原因：" + res)
						}
					})
					uni.request({
						url: 'http://39.106.80.215/healthproject/sickuser/user/userGetVisitRecordsList?page=1&size=30',
						method: "GET",
						header: {
							token: res.data
						},
						success: function(res) {
							console.log(res.data.data.data)
							that.jiuzhen = res.data.data.data
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
		/* background-color: #F3F5F4; */
		font-size: 30rpx;
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

	.jiuyijilu-title {
		padding: 10rpx 0;
		display: flex;
		justify-content: space-between;
	}

	.jiuyijilu-body {
		padding: 20rpx 0;
		display: flex;
		justify-content: space-between;
		border-bottom: 2rpx solid #CACCCB;
	}

	.jiuyijilu-title text:nth-of-type(1) {
		color: #3DCDB4;
		font-size: 34rpx;
		font-weight: bold;
	}

	.xianbingshi {
		display: flex;
	}

	.xianbingshi .left view {
		width: 150rpx;
		height: 80rpx;
		border: 1rpx solid #F3F5F4;
		line-height: 80rpx;
		text-align: center;
	}

	.xianbingshi .left view:nth-of-type(1) {
		border: 1rpx solid #F3F5F4;
		background-color: #3DCDB4;
		color: #ffffff;
	}

	#nav2 {
		display: flex;
		flex-direction: column;
		height: 500rpx;
		width: 150rpx;
	}
	.teshuzhiliao .color{
		color: #939999;
		font-size: 28rxp;
	}
	.teshuzhiliao .body{
		width: 500rpx;
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
		/* width: 250rpx; */
	}
</style>
