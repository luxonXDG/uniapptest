<template>
	<view class="content">
		<view v-for="(item,index) in massage" :key="index">
			<view v-if="i === item.diseaseLog_id">
				<view class="title">
					创建时间：{{item.createTime|date}}
				</view>
				<view class="main">
					<view class="main-title">
						内容 :
					</view>
					<view class="main-content">
						{{item.diseaseLog_content}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				massage:[],
				i:''
			}
		},
		methods: {
			
		},
		filters: {
			date(time) {
				let date = new Date(time);
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				return year + "/" + month + "/" + day
			}
		},
		onLoad:function(option){
			console.log(option)
			this.i = JSON.parse(decodeURIComponent(option.index));
			console.log(this.index)
			var that = this
			uni.getStorage({
				key:"loginData",
				success:function(res){
					// console.log(res.data)
					uni.request({
						url:'http://39.106.80.215/healthproject/sickuser/diseselog/getDiseaseLogList',
						method:'GET',
						header:{
							token:res.data
						},
						data:{
							page:"1",
							size:"30"
						},
						success:function(res){
							console.log(res.data.data)
							that.massage = res.data.data.data
							console.log(that.massage)
						}
					})
				}
			})
		}
	}
</script>

<style>
	.content{
		padding: 40rpx;
	}
.title{
	color: #CACCCB;
	font-size: 28rpx;
}
.main-title{
	font-size: 32rpx;
	margin-top: 30rpx;
	margin-bottom: 30rpx;
}
.main-content{
	font-size: 36rpx;
}
</style>
