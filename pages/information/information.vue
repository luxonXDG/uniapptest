<template>
	<view class="all">
		<view class="header">
			<view class="name">
				<h5>{{list.name}}</h5>
			</view>
			<view class="headerImg">
				<image :src="list.headerImg" mode=""></image>
			</view>
			
		</view>
		<view class="list">
			<view>
				<view class="phone">
					手机号
				</view>
				<view class="open">
					{{list.phone}}
				</view>
			</view>
			<view>
				<view class="phone">
					昵称
				</view>
				<view class="open">
					{{list.name}}
				</view>
			</view>
			<view>
				<view class="phone">
					微信绑定
				</view>
				<view class="open">
					<view class="bind">
						<view @click="bind">
							{{list.phone}}
						</view>
					</view>
				</view>
			</view>
		</view>
	    <view class="footer">
	    	<button type="default">退出登录</button>
	    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:{
					name:'',
					phone:'',
					headerImg:''
				}
			}
		},
		methods: {
			
			bind(){
				uni.showModal({
					cancelColor:'#3dcdb4',
					confirmColor:'	#FF4500',
					title:'解除绑定',
					content:'你还可以使用手机号登录此账号哟'
				})
			}
		},
		onLoad:function(){
			var that = this
			uni.getStorage({
				key:"loginData",
				success:function(res){
					// console.log(res.data)
					uni.request({
						url:'http://39.106.80.215/healthproject/sickuser/user/userPatientInfo',
						method:"GET",
						header:{
							token:res.data
						},
						success:function(res){
							console.log(res.data.data)
							that.list.phone = res.data.data.loginPhone
							that.list.name = res.data.data.patientNick
							that.list.headerImg = res.data.data.loginHeadImg
						}
					})
				}
			})
		}
	}
</script>

<style>
.header{
	width: 100%;
	
	margin-top: 20px;
	display: flex;
	justify-content: space-between;
	height: 80px;
	line-height: 80px;
	border-bottom: 1px solid #F2F5F4;
}
.name{
	margin-left: 20px;
	font-size: 20px;
}
.headerImg{
	margin-right: 20px;
	margin-top: 10px;
	
	height: 60px;
	width: 60px;
	
}
.headerImg image{
	height: 60px;
	width: 60px;
	border-radius: 9px;
}
.list>view{
	color: #696969;
	font-size: 15px;
	display: flex;
	width: 100%;
	height: 56pt;
	border-bottom: 1px solid #F2F5F4;
	position: relative;
	padding-left: 20px;
	
	line-height: 56pt;
	
}
.bind{
	display: flex;
	color: #CACACC;
}
.bind image{
	height: 35px;
	width: 35px;
	margin-top: 20px;
}
/* .list>view:nth-of-type(3){
	position: absolute;
	right: 0px;
} */
.open{
	position: absolute;
	right: 30px;
}
/* .all{
	position: relative;
	height: 100%;
} */

.footer{
margin-top: 200px;
	
}
.footer button{
	font-size: 15px;
	color: #FFFFFF;
	width: 150px;
	background-color: #ff4c4c;
}

</style>
