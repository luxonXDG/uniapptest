<template>
	<view>
		<view class="Bitcoin">
			<view class="BitcoinTop">
				<view class="hetao">
					我的核桃
				</view>
				<view class="daojishi" v-for="(item,i) in daojishi" :key="i">
					{{item.daojishi}}
				</view>
			</view>
			<view class="BitcoinBottom">
				<view class="BitcoinBottomleft" v-for="(item,i) in daojishi" :key="i">
					{{item.BitcoinBottomleft}}
				</view>
				<navigator url="../details/details">
					<view class="BitcoinBottomright">
						查看明细
					</view>
				</navigator>
			</view>
		</view>
		<view class="Recharge">
			<view class="icon">
				<image src="../../static/img/Recharge.png" mode=""></image>
			</view>
			<view class="Rechargecontent">
				充值会员
			</view>
		</view>
		<view class="options">
			<view v-if="ischange" class="blue"  @click="xuanzhong">
				月卡</br>￥100
			</view>
			<view v-else class="wu" @click="xuanzhong">
				月卡</br>￥100
			</view>
			<view v-if="ischange1" class="blue"  @click="xuanzhong1">
				季卡</br>￥300
			</view>
			<view v-else class="wu" @click="xuanzhong1">
				季卡</br>￥300
			</view>
			<view v-if="ischange2" class="blue"  @click="xuanzhong2">
				半年卡</br>￥600
			</view>
			<view v-else class="wu" @click="xuanzhong2">
				半年卡</br>￥600
			</view>
			<view v-if="ischange3" class="blue"  @click="xuanzhong3">
				年卡</br>￥1200
			</view>
			<view v-else class="wu" @click="xuanzhong3">
				年卡</br>￥1200
			</view>
		</view>
		<view class="footer">
			<navigator url="../Rechargedescription/Rechargedescription">
				<view class="footerleft">充值说明</view>
			</navigator>
				<view class="footerright"><button type="default" @click="chongzhi">去充值</button></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				daojishi: [{
						daojishi: "20天后会员到期"
					},
					{
						BitcoinBottomleft: "12345"
					}

				],
				ischange:false,
				ischange1:false,
				ischange2:false,
				ischange3:false,
				card:''
			}
		},
		methods: {
			chongzhi:function(){
				var xuanze = this.card
				if(xuanze === ""){
					uni.showModal({
						content:"请选择购买卡的类型",
					})
				}
				else{
					uni.navigateTo({
						url:'../Confirmorder/Confirmorder?cardId='+xuanze
					})
				}
			},
			xuanzhong: function() {
				this.card = 1
				console.log(this.card)
				// console.log(1)
				this.ischange1=false
				this.ischange2=false
				this.ischange3=false
				if(this.ischange){
					this.ischange=false
				}else{
					this.ischange=true
				}
			},
			xuanzhong1: function() {
				this.card = 2
				console.log(this.card)
				this.ischange=false
				this.ischange2=false
				this.ischange3=false
				if(this.ischange1){
					this.ischange1=false
				}else{
					this.ischange1=true
				}
			},
			xuanzhong2: function() {
				this.card = 3
				console.log(this.card)
				this.ischange=false
				this.ischange1=false
				this.ischange3=false
				if(this.ischange2){
					this.ischange2=false
				}else{
					this.ischange2=true
				}
			},
			xuanzhong3: function() {
				this.card = 4
				console.log(this.card)
				this.ischange=false
				this.ischange2=false
				this.ischange1=false
				if(this.ischange3){
					this.ischange3=false
				}else{
					this.ischange3=true
				}
			}
		}
	}
</script>

<style>
	.Bitcoin {
		height: 100px;
		background-color: #F2F5F4;
		display: flex;
		justify-content: center;
		/* border: 1px solid red; */
	}

	.BitcoinTop {
		width: 50%;
		/* border: 1px solid red; */
		line-height: 60px;
		font-size: 15px;
		/* margin-left: 5%; */
		/* border: 1px solid red; */


	}

	.hetao {
		color: #696969;
		padding-left: 30px;
		height: 20px;
		font-weight: 600;
	}

	.daojishi {
		padding-left: 30px;
		padding-top: 10px;
		font-size: 12px;
		color: #939998;
	}

	.BitcoinBottom {
		/* border: 1px solid red; */
		width: 40%;
		/* margin-left: 40%; */
		/* display: flex;
	justify-content: space-between; */
	}

	.BitcoinBottomleft {
		color: #696969;
		padding-top: 10px;
		padding-left: 30px;
	}

	.BitcoinBottomright {
		padding:10rpx 30px;
		font-size: 12px;
		/* line-height: 40px; */
		color: #3dcdb4;
		/* margin-right: 10px; */
	}

	.Recharge {
		margin-top: 15px;
		display: flex;
		height: 35px;

	}

	.icon image {
		margin-top: 6px;
		width: 25px;
		height: 25px;
		margin-left: 15px;
	}

	.Rechargecontent {
		margin-left: 5px;
		font-size: 15px;
		height: 100%;
		line-height: 35px;
	}

	.options {
		margin-top: 20px;

		display: flex;
		justify-content: space-around;

	}

	.options view {
		color: #696969;
		line-height: 30px;
		padding: 10px 0px;
		font-size: 30rpx;
		/* line-height: 80px; */
		font-weight: 600;
		text-align: center;
		width: 20%;
		border: 1px solid #f2f5f4;

	}

	.footer {
		margin-top: 100px;
		display: flex;
		justify-content: center;
	}

	.footerleft {
		font-size: 12px;
		line-height: 40px;
		color: #3dcdb4;
		margin-right: 10px;
	}

	.footerright button {
		font-size: 15px;
		color: #FFFFFF;
		width: 150px;
		background-color: #ff4c4c;
	}
	.blue{
		background-color: #3DCDB4;
		color: #ffffff !important;
	}
</style>
