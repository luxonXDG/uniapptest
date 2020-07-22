<template>
	<view>
		<view>
			<view class="head">
				<view class="touxang">头像</view>
				<view class="tximg">
					<image :src="list.headImg"></image>
				</view>
			</view>
			<view class="fenge"></view>
			<view class="con">
				<view class="display">
					<view>真实姓名</view>
					<input placeholder="输入姓名" maxlength="5" v-model="list.patientNick" />
				</view>
				<view class="display">
					<text>性别</text>
					<view class="uni-list">
						<view class="uni-list-cell">
							<view class="uni-list-cell-db">
								<picker @change="bindPickerChange" :value="index" :range="array" v-model="list.sex">
									<view class="uni-input">{{array[index]}}</view>
								</picker>
							</view>
						</view>
					</view>
				</view>
				<view class="display">
					<view>出生年月日</view>
					<view class="uni-list color">
						<view class="uni-list-cell">
							<view class="uni-list-cell-db">
								<picker mode="date" :value="chushengdate" :start="startDate" :end="endDate" @change="chushengbindDateChange">
									<view class="uni-input">{{chushengdate}}</view>
								</picker>
							</view>
						</view>
					</view>
				</view>
				<view class="display">
					<view>初次发病时间</view>
					<view class="uni-list color">
						<view class="uni-list-cell">
							<view class="uni-list-cell-db">
								<picker mode="date" :value="fabingdate" :start="startDate" :end="endDate" @change="fabingbindDateChange">
									<view class="uni-input">{{fabingdate}}</view>
								</picker>
							</view>
						</view>
					</view>
				</view>
		
				<view class="display">
					<view>现居住地</view>
					<view>
						<input type="text" value="" placeholder="请输入现居住地" v-model="juzhushi" />
					</view>
				</view>
		
				<view class="display">
					<view>确诊医院</view>
					<view>
						<input type="text" value="" placeholder="请输入确诊医院" v-model="yiyuan" />
					</view>
				</view>
				<view class="display">
					<view>确诊时间</view>
					<view class="uni-list color">
						<view class="uni-list-cell">
							<view class="uni-list-cell-db">
								<picker mode="date" :value="quezhendate" :start="startDate" :end="endDate" @change="quezhenbindDateChange">
									<view class="uni-input">{{quezhendate|date}}</view>
								</picker>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view>
				<button type="default" class="wcbtn" @click="wanchen()">完成</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				headImg: '',
				title: 'picker',
				array: ['男', '女'],
				index: 0,
				chushengdate: currentDate,
				fabingdate: currentDate,
				quezhendate: currentDate,
				juzhushi:'',
				list:{
					"city": 1,
					"headImg": "",
					"illage": 0,
					sex:'',
					yiyuan:'',
					"patientBirthday": "",
					"patientNick": "",
					"patientSex": 2,
					"province": 0
				}
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
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		onLoad:function(){
			var that = this
			uni.getStorage({
				key:"loginData",
				success:function(res){
					console.log(res.data)
					uni.request({
						url:'http://39.106.80.215/healthproject/sickuser/user/getPatientInfo',
						method:"GET",
						header:{
							token:res.data
						},
						success:function(res){
							console.log(res.data)
							that.list.headImg = res.data.data.headImg
							that.list.patientNick = res.data.data.patientNick
							that.list.sex = res.data.data.sex
							that.juzhushi = res.data.data.cityName
							that.yiyuan = res.data.data.hospitalName
							that.quezhendate = res.data.data.visitrecordstime
						}
					})
				}
			})
		},
		methods: {
			wanchen: function() {
				var that = this
				uni.getStorage({
					key: 'loginData',
					success: function(res) {
						console.log(res.data)
						console.log("获取成功")
						uni.request({
							url: 'http://39.106.80.215/healthproject/sickuser/user/userEditPatient',
							method: 'POST',
							header: {
								"Content-Type": "application/json;charset=utf-8",
								"token": res.data
							},
							data: {
								"city": that.juzhushi,
								"headImg": that.list.headImg,
								"illage": 0,
								"patientBirthday": that.list.patientBirthday,
								"patientNick": that.list.patientNick,
								"patientSex": that.list.patientSex,
								"province": 0
							},
							success: function(res) {
								console.log(res)
							}
						})
					}
				})
				uni.showModal({
					title: '提示',
					content: '为了确保您的账户安全，核桃仁建议您完成手机号绑定',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
							uni.navigateTo({
								url: '../bindingPhonePopup/bindingPhonePopup'
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
							uni.navigateTo({
							    url: '../index/index'
							});
						}
					}
				});

			},
			bindCityChange(e) {
				console.log(e)
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.cityIndex = e.target.value
			},
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			},
			chushengbindDateChange: function(e) {
				this.chushengdate = e.target.value
			},
			fabingbindDateChange: function(e) {
				this.fabingdate = e.target.value
			},
			quezhenbindDateChange: function(e) {
				this.quezhendate = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			}
		}
	}
</script>

<style scoped>
	.head {
		/* border-bottom: 1rpx solid #CACCCC; */
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 110px;
		font-size: 16px;
	}

	.head view {
		margin: 0 30px 0 30px;
	}

	.head>view image {
		width: 65px;
		height: 65px;
		border-radius: 12px;
	}

	.fenge {
		height: 25px;
		background-color: #f2f5f4;
	}

	.display {
		height: 45px;
		font-size: 15px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 25px;
		padding-right: 25px;
	}

	.con>view:nth-of-type(1) {
		border-bottom: 6px solid #F2F5F4;
	}

	.con>view:nth-of-type(2) {
		border-bottom: 1px solid #F2F5F4;
	}

	.con>view:nth-of-type(4),
	.con>view:nth-of-type(5),
	.con>view:nth-of-type(6) {
		border-bottom: 1px solid #F2F5F4;
	}

	.color {
		color: #939998;
	}

	.display input {
		text-align: right;
	}

	.wcbtn {
		position: absolute;
		bottom: 140rpx;
		width: 600rpx;
		background-color: #3DCCB4;
		color: #fff;
		left: 50%;
		transform: translate(-50%);
	}

	.wcbtn::after {
		border: none;
	}

	.uni-list-cell-db {
		color: #939998;
	}
</style>
