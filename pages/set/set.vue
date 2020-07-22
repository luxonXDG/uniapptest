<template>
	<view>
		<view class="list">
			<navigator url="../Messagesettings/Messagesettings">
				<view>
					<view class="icon">
						<image src="../../static/img/Messagesettings.png" mode=""></image>
					</view>
					<view class="listName">
						消息设置
					</view>

					<view class="open">
						<image src="../../static/img/dayu.png" mode=""></image>
					</view>

				</view>
			</navigator>
			<navigator url="../Accountsettings/Accountsettings">
				<view>
					<view class="icon">
						<image src="../../static/img/Accountsettings.png" mode=""></image>
					</view>
					<view class="listName">
						账户设置
					</view>

					<view class="open">
						<image src="../../static/img/dayu.png" mode=""></image>
					</view>

				</view>
			</navigator>
			<navigator url="../Versionupdate/Versionupdate">
				<view>
					<view class="icon">
						<image src="../../static/img/Versionupdate.png" mode=""></image>
					</view>
					<view class="listName">
						版本更新
					</view>

					<view class="open">
						<image src="../../static/img/dayu.png" mode=""></image>
					</view>

				</view>
			</navigator>
			<view @click="qingkong">
				<view class="icon">
					<image src="../../static/img/Clearcache.png" mode=""></image>
				</view>
				<view class="listName">
					清除缓存
				</view>

				<view class="open">
					<image src="../../static/img/dayu.png" mode=""></image>
				</view>

			</view>
			
				<view @click="fenxiang">
					<view class="icon">
						<image src="../../static/img/share.png" mode=""></image>
					</view>
					<view class="listName">
						分享APP
					</view>

					<view class="open">
						<image src="../../static/img/dayu.png" mode=""></image>
					</view>

				</view>
			
		</view>
		<view class="footer">
			
				<button type="default" @click="tuichu">退出登录</button>
			

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			qingkong() {
				uni.showModal({
					content: '是否清空缓存',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
							uni.removeStorage({
								key: 'loginData',
								success: function(res) {
									console.log('success');
								}
							});
							uni.reLaunch({
								url: '../denglu/denglu'
							});
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			tuichu() {
				uni.showModal({
					content: '确定退出当前账号',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
							uni.removeStorage({
								key: 'loginData',
								success: function(res) {
									console.log('success');
								}
							});
							uni.reLaunch({
								url: '../denglu/denglu'
							});
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			fenxiang(){
				uni.showModal({
					content:"暂时不支持分享，请等待之后更新版本"
				})
			}
		}
	}
</script>

<style>
	.list>navigator>view {

		display: flex;
		width: 100%;
		height: 50pt;
		border-bottom: 1rpx solid #F2F5F4;
		position: relative;

	}

	.list>view {

		display: flex;
		width: 100%;
		height: 50pt;
		border-bottom: 1rpx solid #F2F5F4;
		position: relative;

	}

	.icon image {
		margin-left: 10px;
		margin-right: 5px;
		height: 25px;
		width: 25px;
		margin-top: 20px;

	}

	.listName {
		margin-left: 5px;
		font-size: 15px;
		height: 50pt;
		line-height: 50pt;
	}

	.open image {
		position: absolute;
		right: 10px;
		height: 35px;
		width: 35px;
		margin-top: 20px;

	}

	.footer {
		margin-top: 150px;
	}

	.footer button {
		font-size: 15px;
		color: #FFFFFF;
		width: 150px;
		background-color: #ff4c4c;
	}
</style>
