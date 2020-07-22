<template>
	<view>
		<view class="uni-textarea">
			<textarea placeholder-style="color:#cacccc" placeholder="请输入今天的日志" v-model="riji" />
			</view>
		<view class="btn">
			<button size="mini" type="warn" @click="clear">清空</button>
			<button size="mini" type="primary" style="background-color: #3DCDB4 !important;" @click="tijiao">提交</button>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				riji:'',
				loginData:""
			}
		},
		methods: {
			onNavigationBarButtonTap(val) {
				console.log(this.riji)
				
			},
			clear(){
				this.riji = ''
			},
			tijiao(){
				var that = this
				uni.getStorage({
					key:"loginData",
					success:function(res){
						console.log(res.data)
						uni.request({
							url:'http://39.106.80.215/healthproject/sickuser/diseselog/addDiseaseLog',
							method:"POST",
							header:{
								token:res.data
							},
							data:{
								createtime:"1592806910",
								diseaselogContent:that.riji,
								diseaselogId:"0",
								diseaselogImgs:"1",
								diseaselogVideo:"1"
							},
							success:function(res){
								console.log(res)
								uni.showModal({
									content:'提交成功',
									success:function(res){
										uni.navigateTo({
											url:'../index/index'
										})
									}
								})
							}
						})
					}
				})
			}
		}
	}
</script>

<style>
 textarea{
	 width: 96%;
	 margin: 5px auto;
	 border: 1px dashed #CACACC;
	 padding: 20rpx;
	 box-sizing: border-box;
	 height: 600rpx;
 }
.btn{
	float: right;
	margin-right: 20rpx;
	margin-top: 30rpx;
}
.btn button:nth-of-type(1){
	margin-right: 40rpx;

}
</style>
