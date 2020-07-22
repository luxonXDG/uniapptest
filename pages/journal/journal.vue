<template>
	<view>
		<view class="list">
				<view v-for="(item,i) in massage" :key="i" @click="xiangqing(item.diseaseLog_id)">
					<view class="Tittle">{{item.createTime|date}} 日记{{item.diseaseLog_id}}</view>
					<view class="Data">记录时间:{{item.createTime|date}}</view>
				</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				massage:[]
			}
		},
		methods: {
			onNavigationBarButtonTap(){
				uni.navigateTo({
					url:"../log/log"
				})
			},
			xiangqing(i){
				console.log(i)
				uni.navigateTo({
					url:'../rizhixiangqing/rizhixiangqing?index='+i
				})
			}
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
		onLoad:function(){
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
  .list>view{
	  margin-top: 20px;
	  width: 100%;
	  
	  font-size: 15px;
	  border-bottom: 1px solid #F2F5F4;
  }
  .Tittle{
	  margin-left: 15px;
	  /* font-size: 15px; */
	  font-weight: 600;
	  color: #3dcdb4;
  }
  .Data{
	  margin-left: 15px;
	  color: #a3a7af;
	  margin-top: 10px;
	  font-size: 13px;
	  margin-bottom: 15px;
	  
  }
</style>
