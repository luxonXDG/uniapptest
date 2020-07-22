<template>
	<view class="content">
		<view class="banner">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item>
					<view class="swiper-item">
						<image :src=img mode="widthFix"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image :src=img2 mode="widthFix"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image :src=img3 mode="widthFix"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="shouye_btn">
			<view class="shouye_btn_content" @click="chooseImage">
				症状拍照
			</view>
			<view class="shouye_btn_content">
				<navigator url="../buliangfanying/buliangfanying">
					记录不良反应
				</navigator>
			</view>
			<view class="shouye_btn_content" @click="chooseImage">
				拍摄症状
			</view>
			<view class="shouye_btn_content">
				<navigator url="../fazuocishu/fazuocishu">
					记录发作次数
				</navigator>
			</view>
		</view>
		<view class="main">
			<!-- 用药提醒 -->
			<view class="yongyao">
				<text>用药提醒</text>
				<view class="main_yongyao">
					<view class="yongyaoContent">
						<view class="date">
							<text>{{week}}</text>
							<text>{{date}}</text>
						</view>
						<view v-for="(item,i) in list" :key="i" class="yongyaoList">
							<text>{{item.yao}}</text>
							<text>{{item.jiliang}}</text>
						</view>
						<view class="yaoBtn">
							<button type="primary" size="mini" @click="yifuyong">今日已服用</button>
						</view>
					</view>
				</view>
			</view>
			<!-- 我的医生 -->
			<view class="myDoc">
				<text>我的医生</text>
				<view class="main_myDoc">
					<view class="myDocContent">
						<view class="head">
							<view class="headImg">
								<!-- 头像 -->
								<image :src=headImg mode="scaleToFill"></image>
							</view>
							<view class="headText">
								<!-- 名字 -->
								<view>
									<text>{{name}}</text>
									<!-- 职位 -->
									<text>{{zhiwei}}</text>
								</view>
								<view>
									<text>关联时间：{{time}}</text>
								</view>
							</view>
						</view>
						<view class="headTitle">
							<view>
								<text>从医经验：{{jingyan}}</text>
							</view>
							<view>
								<text>所属医院：{{yiyuan}}</text>
							</view>
						</view>
						<view>
							<uni-segmented-control :current="current" :values="items" 
							@clickItem="onClickItem" style-type="text"
							 active-color="#3DCCB4"></uni-segmented-control>
							<view class="content">
								<view class="main-content">
									<view v-if="current === 1">
										<view class="main-content-zhenliao">
											<view v-for="(item,i) in zhenliao" :key="i">
												<view class="zhengliaoLeft">
													<view>{{item.time}}</view>
													<view>{{item.place}}</view>
												</view>
												<view class="zhengliaoRight">
													<view v-if="item.zhuangtai===1" class="green">报名中</view>
													<view v-else class="red">已结束</view>
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
									<view v-if="current === 0">
										<view class="main-content-huanjiao">
											<view v-for="i in HuanJiaoArr" :key="i" @click="baoming(i.patientactivityId)">
												<view class="zhengliaoLeft">
													<view>{{i.endtime|date}}</view>
													<view>主题：{{i.patientactivityTitle}}</view>
													<view>主持人：{{i.doctorName}}</view>
												</view>
												<view class="zhengliaoRight">
													<view v-if="i.signUpState === 1" class="green">报名中</view>
													<view v-else-if="i.signUpState === 0" class="red">已结束</view>
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
								</view>
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
	import zhengliaohuodong from "../../components/zhenliaohuodong.vue"
	import huanjiaohuodong from "../../components/huanjiaohuodong.vue"
	export default {
		components: {
			uniSegmentedControl,
			zhengliaohuodong,
			huanjiaohuodong
		},
		data() {
			return {
				items: ['患教活动','诊疗活动'],
				current: 0,
				img: "../../static/img/banner1.png",
				img2:'../../static/img/banner2.png',
				img3:'../../static/img/banner3.png',
				week: "第一周",
				date: "2020.1.1~2020.1.7",
				list: [{
						yao: "德巴金缓解片",
						jiliang: "100mg/日"
					},
					{
						yao: "得利多",
						jiliang: "20mg/日"
					},
					{
						yao: "德巴金缓解片",
						jiliang: "100mg/日"
					},
					{
						yao: "得利多",
						jiliang: "20mg/日"
					}
				],
				name: "",
				zhiwei: "",
				time: "2020-1-10",
				jingyan: "主治癫痫10年",
				yiyuan: "",
				headImg:"",
				zhenliao: [{
						time: "2017-12-22 09:12:00 诊疗活动",
						place: "地点：北京第一癫痫医院",
						zhuangtai: 1
					},
					{
						time: "2017-12-22 09:12:00 诊疗活动",
						place: "地点：北京第一癫痫医院",
						zhuangtai: 0
					},
					{
						time: "2017-12-22 09:12:00 诊疗活动",
						place: "地点：北京第一癫痫医院",
						zhuangtai: 0
					},
					{
						time: "2017-12-22 09:12:00 诊疗活动",
						place: "地点：北京第一癫痫医院",
						zhuangtai: 1
					}
				],
				huanjiao: [],
				result:'',
				HuanJiaoArr:[]
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
		onLoad() {
			var that = this
			// console.log(this.huanjiao)
			uni.getStorage({
				key:"loginData",
				success:function(res){
					// console.log("请求成功")
					// 请求患教活动
					uni.request({
						url:"http://39.106.80.215/healthproject/SickUser/patientActivity/selectSickPatientActivity?page=1&size=4",
						method:"POST",
						header:{
							token:res.data
						},
						success:function(res){
							// console.log("请求成功")
							console.log(res.data.data)
							// console.log(this.huanjiao)
							that.huanjiao = res.data.data.data
							that.xunHuan()
							// console.log(that.huanjiao)
							// console.log(res.data.data)
						}
					})
					//请求绑定医生
					uni.request({
						url:"http://39.106.80.215/healthproject/sickuser/user/userGetDoctorInfoById?doctorId=1",
						method:"GET",
						header:{
							token:res.data
						},
						success:function(res){
							console.log(res.data.data)
							that.name = res.data.data.doctorName
							that.zhiwei = res.data.data.positionName
							that.yiyuan = res.data.data.hospitalName
							that.headImg = res.data.data.headImg
						}
					})
				}
			})
		},
		// mounted(){
		// 	console.log(this.huanjiao)
		// },
		methods: {
			yifuyong(){
				var that = this
				uni.showModal({
					content:'确定今日已服用药物',
					success:function(res){
						if(res.confirm){
							that.list = []
							that.week = ''
							that.date = ''
						}
					}
				})
			},
			onNavigationBarButtonTap(val) {
				var that = this
				console.log(val)
				uni.scanCode({
					success: function(res) {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
						console.log(that.result)
						that.result= res.result
						uni.getStorage({
							key:"loginData",
							success:function(res2){
								console.log(res2.data)
								uni.request({
									url:'http://39.106.80.215/healthproject/sickuser/user/useCode?appCodeId='+that.result,
									method:"POST",
									header:{
										token:res2.data
									},
									success:function(res3){
										console.log(res3)
									}
								})
							}
						})
					}
				});
				// uni.navigateTo({
				// 	url:'../more/more'
				// })
			},
			xunHuan() {
				var arr = this.huanjiao
				for (let i = arr.length; i > 0; i--) {
					this.HuanJiaoArr.push(arr[i - 1])
					// console.log(arr[i-1])
				}
				// console.log(this.HuanJiaoArr)
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
			},
			chooseImage() {
				uni.chooseImage({
					count: 6, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相册选择、摄像头
					success: function(res) {
						console.log(JSON.stringify(res.tempFilePaths));
						uni.showModal({
							content:"上传成功！"
						})
					}
				});
			},
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					// console.log(e)
					this.current = e.currentIndex;
				}
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: #F3F5F4 !important;
		color: #323433;
	}

	.banner {
		width: 100%;
	}

	.banner image {
		width: 100%;
	}

	.shouye_btn {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		justify-content: space-around;
	}

	.shouye_btn .shouye_btn_content {
		/* border: 2rpx #CACCCB solid; */
		background-color: #ffffff;
		width: 48%;
		height: 120rpx;
		margin-top: 10rpx;
		text-align: center;
		line-height: 120rpx;
		font-size: 32rpx;
	}

	.main {
		width: 100%;
	}

	.main>view>text {
		font-size: 28rpx;
		color: #939999;
		margin-top: 20rpx;
	}

	.yongyao {
		padding: 0 5%;
	}

	.yongyaoContent {
		/* width: 100%; */
		height: 240rpx;
		padding: 10rpx;
		background-color: #ffffff;
		overflow: auto;
	}

	.myDoc {
		padding: 0 5%;
	}

	.myDocContent {
		width: 100%;
		height: 1300rpx;
		margin-bottom: 50rpx;
		/* border: 2rpx #CACCCB solid; */
		background-color: #ffffff;
	}

	.date {
		display: flex;
		justify-content: space-between;
		font-size: 26rpx;
		padding: 10rpx;
		font-weight: bold;
	}

	.yongyaoList {
		display: flex;
		justify-content: space-between;
		font-size: 24rpx;
		padding: 10rpx;
	}

	.yaoBtn {
		display: flex;
		justify-content: center;
		margin-top: 20rpx;
		margin-bottom: 40rpx;
	}

	.yaoBtn button {
		background-color: #3DCCB4;
	}

	.head {
		padding: 30rpx 30rpx 0 30rpx;
		display: flex;
	}

	.headImg image {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		border: 2rpx #CACCCB solid;
	}

	.headText {
		font-size: 30rpx;
		line-height: 50rpx;
		margin-left: 20rpx;
	}

	.headText text:nth-of-type(2) {
		margin-left: 40rpx;
	}

	.headTitle {
		font-size: 30rpx;
		line-height: 80rpx;
		margin-left: 20rpx;
		margin-right: 20rpx;
	}

	.headTitleBar {
		margin-top: 20rpx;
		display: flex;
		justify-content: space-around;
		border: 2rpx #CACCCB solid;
	}

	.headTitleBar text:nth-of-type(1) {
		color: #007AFF;
	}
	.main-content{
		width: 100%;
		background-color: #ffffff;
	}
	.main-content-zhenliao {
		font-size: 28rpx;
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
		font-size: 28rpx;
	}
.main-content-huanjiao {
		font-size: 28rpx;
		padding: 0rpx 40rpx;
		box-sizing: content-box;
	}
	
	.main-content-huanjiao>view {
		background-color: #ffffff;
		width: 100%;
		display: flex;
		justify-content: space-between;
		line-height: 50rpx;
		padding: 20rpx 0;
		border-bottom: #CACCCB 2rpx solid;
		color: #323433;
		font-size: 28rpx;
	}
	.red{
		color: #FF0000;
	}
	.green{
		color: #3DCCB4;
	}
	.more {
		font-size: 30rpx;
		float: right;
		margin-right: 30rpx;
		color: #007AFF;
	}
</style>
