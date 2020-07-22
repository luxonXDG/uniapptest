<template>
	<view>
		<view class="all">
			<view class="morderList" v-for="i in list" :key='i' v-if="i.cardId == cardId">
				<view class="morderListCenter">
					<view>{{i.cardType}}</view>
					<view>￥{{i.money}}</view>
				</view>
				<view class="morderListRight">
					x1
				</view>
			</view>
			<view class="footer">
				<view class="footerLeft" v-for="i in list" :key='i' v-if="i.cardId == cardId">
					实付款￥{{i.money}}
				</view>
				<view class="footerRight">
					<button type="default">立即支付</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cardId: '',
				list: []
			}
		},
		methods: {

		},
		onLoad: function(option) {
			var that = this
			var theList = this.list
			console.log(option.cardId)
			this.cardId = option.cardId
			uni.getStorage({
				key: "loginData",
				success: function(res) {
					console.log(res.data)
					//获取账户信息
					uni.request({
						url: 'http://39.106.80.215/healthproject/sickuser/account/goRecharge',
						method: "POST",
						header: {
							token: res.data
						},
						data: {
							cardId: that.cardId
						},
						success: function(res) {
							console.log(res)
						}
					});
					uni.request({
						url: 'http://39.106.80.215/healthproject/sickuser/account/selectCard',
						method: "POST",
						success: function(res) {
							// console.log(res.data.data)
							// console.log(theList)
							that.list = res.data.data
						}
					})
				}
			})
		}
	}
</script>

<style>
	.all {
		position: relative;
		height: 600px;
	}

	.morderList {
		width: 94%;
		margin-left: 3%;
		margin-top: 20px;
		display: flex;
		justify-content: space-around;
		background-color: #F2F5F4;
		border-radius: 5px;
	}

	.morderList>view {
		/* border: 1px solid red; */
		height: 80px;
		width: 30%;

	}

	.morderListleft image {
		width: 80px;
		height: 80px;

	}

	.morderListCenter>view {
		margin-top: 10px;
	}

	.morderListCenter>view:nth-of-type(1) {
		font-size: 16px;
		font-weight: bold;
	}

	.morderListCenter>view:nth-of-type(2) {
		font-size: 14px;
		color: #C0C0C0;
	}

	.morderListRight {
		text-align: right;
		line-height: 80px;
		font-size: 15px;
	}

	.footer {
		display: flex;
		justify-content: space-between;
		position: absolute;
		bottom: 0px;
		height: 80px;
		width: 100%;
		border-top: 1px solid #CACACC;
	}

	.footerLeft {
		padding-left: 10px;
		height: 100%;
		line-height: 80px;
		font-size: 15px;
		color: #696969;

	}

	.footerRight {
		/* border: 1px solid red; */
		padding-right: 10px;
		margin-right: 0px;
	}

	.footerRight button {
		font-size: 15px;
		color: #FFFFFF;
		width: 150px;
		background-color: #ff4c4c;
		margin: 20px auto;
	}
</style>
