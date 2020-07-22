<template>
	<view>
		<navigator url="../information/information">
			<view class="head" >
				<view class="headerImg">
					<image :src="list.headImg" mode=""></image>
				</view>
				<view class="name">
					{{list.name}}
				</view>
			</view>
		</navigator>
		<view class="List">
			<navigator url="../journal/journal">
				<view>
					<view class="left">
						<view class="icon">
							<image src="../../static/img/3.png" mode=""></image>
						</view>
						<view class="Listname">
							病情日志
						</view>
					</view>
					<view class="right">
						<image src="../../static/img/dayu.png" mode=""></image>
					</view>
				</view>
			</navigator>
			<navigator url="../account/account">
				<view>
					<view class="left">
						<view class="icon">
							<image src="../../static/img/1.png" mode=""></image>
						</view>
						<view class="Listname">
							账户信息
						</view>
					</view>
					<view class="right">
						<image src="../../static/img/dayu.png" mode=""></image>
					</view>
				</view>
			</navigator>
			<navigator url="../mydoctor/mydoctor">
				<view>
					<view class="left">
						<view class="icon">
							<image src="../../static/img/4.png" mode=""></image>
						</view>
						<view class="Listname">
							我的医生
						</view>
					</view>
					<view class="right">
						<image src="../../static/img/dayu.png" mode=""></image>
					</view>
				</view>
			</navigator>
			<navigator url="../set/set">
				<view>
					<view class="left">
						<view class="icon">
							<image src="../../static/img/5.png" mode=""></image>
						</view>
						<view class="Listname">
							设置
						</view>
					</view>
					<view class="right">
						<image src="../../static/img/dayu.png" mode=""></image>
					</view>
				</view>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: {
					headImg: '',
					name: '',
					bingqing: "癫痫一期患者",
					sex: "",
					age: "",
					city: "上海",
					quezhenyiyuan: "北京癫痫医院",
					bingling: "15年"
				},
			}
		},
		methods: {

		},
		onLoad:function(){
			var theList = this.list
			uni.getStorage({
				key:'loginData',
				success:function(res){
					// console.log(res.data)
					var data = res.data
					uni.request({
						url:'http://39.106.80.215/healthproject/sickuser/user/userPatientInfo',
						method:"GET",
						header:{
							"Content-Type":"application/json;charset=utf-8",
							"token":data
						},
						success:function(res){
							console.log("获取成功")
							console.log(res.data)
							theList.name = res.data.data.patientNick
							theList.city = res.data.data.provinceName
							if(res.data.patientSex==1){
								theList.sex = '男'
							}else{
								theList.sex = '女'
							}
							theList.headImg = res.data.data.loginHeadImg
						},
						fail:function(res){
							console.log("上传失败 原因："+res)
						}
					})
				}
			})
		}
	}
</script>

<style>
	.head {

		width: 100%;
	}

	.headerImg {
		width: 60px;

		margin: 35px auto;
	}

	.name {
		text-align: center;
		font-size: 16px;
		font-weight: bold;
	}

	.headerImg>image {

		width: 60px;
		height: 60px;
	}

	.List>navigator:nth-of-type(1) {
		margin-top: 25px;
	}

	.List>navigator>view {
		height: 60px;
		border-bottom: 1px solid #F2F5F4;
		display: flex;
		justify-content: space-between;
	}

	.icon>image {
		width: 35px;
		height: 35px;
		margin-left: 10px;
		margin-top: 15px;
	}

	.left {
		display: flex;
	}

	.right image {
		margin-top: 15px;
		margin-right: 10px;
		height: 30px;
		width: 30px;
	}

	.Listname {
		margin-left: 5px;
		font-size: 15px;
		color: #696969;
		line-height: 60px;

	}
</style>
