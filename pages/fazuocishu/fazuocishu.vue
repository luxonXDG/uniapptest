<template>
	<view>
		<view>
			<form>
				<h5>记录本人发作次数</h5>
				<view class="content">
					<view class="title">
						<text>今日是否发作</text>
					</view>
					<view class="uni-list">
						<radio-group @change="radioChange">
							<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.value">
								<view>
									<radio :value="item.value" :checked="index === current" />
								</view>
								<view>{{item.name}}</view>
							</label>
						</radio-group>
					</view>
					<view class="btn">
						<button type="primary" @click="tijiao">提交</button>
					</view>
				</view>
			</form>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				items: [{
						value: '1',
						name: '是'
					},
					{
						value: '0',
						name: '否',
						checked: 'true'
					}
				],
				current: 0,
				isfazuo:'1'
			}
		},
		methods: {
			radioChange: function(evt) {
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].value === evt.target.value) {
						this.current = i;
						break;
					}
				}
				console.log(evt.detail.value)
				this.isfazuo = evt.detail.value
			},
			tijiao(){
				var that = this
				console.log(that.isfazuo)
				uni.getStorage({
					key:"loginData",
					success:function(res){
						uni.showModal({
							content:"是否确定提交",
							success:function(res1){
								if(res1.confirm){
									uni.request({
										url:'http://39.106.80.215/healthproject/sickuser/user/addFrequency?frequencyNumber='+that.isfazuo,
										method:"POST",
										header:{
											token:res.data
										},
										success:function(res){
											console.log(that.isfazuo)
											console.log(res)
										}
									})
								}
							}
						})
					}
				})
			}
		}
	}
</script>

<style>
	h5{
		text-align: center;
		font-size: 36rpx;
		font-weight: normal;
		padding: 40rpx 0;
		border-bottom: #808080 2rpx solid;
	}
	.title{
		display: flex;
		justify-content: center;
		padding: 30rpx 0;
	}
	.title text{
		font-size: 34rpx;
	}
	.uni-list radio-group{
		display: flex;
		justify-content: space-around;
		padding: 20rpx 100rpx;
	}
	.uni-list label{
		font-size: 30rpx;
		display: flex;
	}
	.btn{
		margin-top: 50rpx;
		width: 100%;
		justify-content: center;
	}
	.btn button{
		width: 70%;
		background-color: #3DCCB4;
	}
</style>
