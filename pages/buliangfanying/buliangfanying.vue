<template>
	<view>
		<view class="uni-list">
			<form>
				<checkbox-group @change="checkboxChange" style="padding-left: 20rpx;">
					<label class="uni-list-cell uni-list-cell-pd" v-for="item in items" :key="item.value">
						<view>
							<checkbox :value="item.value" :checked="item.checked" />
						</view>
						<view>{{item.name}}</view>
					</label>
				</checkbox-group>
				<button class="form-btn" type="primary" @click="tijiao(e)" style="background-color: #3DCCB4 !important;">提交</button>
			</form>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				items: [{
						value: '0',
						name: '无不良反应',
						checked: "true"
					},
					{
						value: '1',
						name: '体重变化(近一个月内体重明显增加或减少)',
					},
					{
						value: '2',
						name: '镇静睹睡(犯困、总是想睡觉)'
					},
					{
						value: '3',
						name: '头痛眩晕'
					},
					{
						value: '4',
						name: '疲劳乏力(浑身没劲)'
					},
					{
						value: '5',
						name: '恶心呕吐'
					},
					{
						value: '6',
						name: '皮肤过敏(扶摇初期出现大量皮肤红斑、水泡、丘疹)'
					},
					{
						value: '8',
						name: '烦躁易怒(心情烦躁.容易生气、发怒打人等)'
					}
				],
				ids:[]
			}
		},
		methods: {
			checkboxChange: function(e) {
				console.log(e)
				var items = this.items,
					values = e.detail.value;
				for (var i = 0, lenI = items.length; i < lenI; ++i) {
					const item = items[i]
					if (values.includes(item.value)) {
						this.$set(item, 'checked', true)
					} else {
						this.$set(item, 'checked', false)
					}
				}
				this.ids = e.detail.value
			},
			tijiao(e){
				var that = this
				console.log(that.ids)
				uni.getStorage({
					key:"loginData",
					success:function(res1){
						uni.showModal({
							content:"是否确定提交",
							success:function(res){
								if(res.confirm){
									uni.request({
										url:"http://39.106.80.215/healthproject/sickuser/user/addReactions",
										method:"POST",
										header:{
											token:res1.data
										},
										data:{
											ids:that.ids
										},
										success(res){
											console.log(res)
											that.ids = []
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
	.uni-list{
		margin-top: 50rpx;
	}
	.uni-list-cell {
		font-size: 28rpx;
		line-height: 90rpx;
	}
	checkbox{
		position: absolute;
		right: 0;
	}
	.form-btn{
		margin-top: 200rpx;
		width: 80%;
	}
</style>
