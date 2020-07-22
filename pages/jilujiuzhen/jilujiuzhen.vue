<template>
	<view class="content">
		<form>
			<view class="header">
				<view>
					<label>就诊医院</label>
					<input placeholder="请输入就诊医院" maxlength="10" />
				</view>
				<view>
					<label>就诊医生</label>
					<input placeholder="请输入就诊医生" maxlength="5" />
				</view>

				<view class="uni-list-cell">
					<view class="uni-list-cell-left">
						就诊时间
					</view>
					<view class="uni-list-cell-db">
						<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
							<view class="uni-input">{{date}}</view>
						</picker>
					</view>
				</view>
				<view>
					<view>选择药品</view>
					<view>
						<navigator>请选择</navigator>
					</view>
				</view>
			</view>
			<!-- 拍照上传 -->
			<view class="paizhao">
				<view>拍照上传</view>
				<view @click="shangchuan">请选择上传的图片</view>
			</view>
			<!-- 文字记录 -->
			<view class="wenzi">
				<view>文字记录</view>
				<view>
					<editor id="editor" class="ql-container" placeholder='开始输入...'></editor>
				</view>
			</view>
			<view class="form-btn">
				<button type="primary">保存</button>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				date: currentDate,
			}
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		methods: {
			shangchuan:function(){
				uni.chooseImage({
				    count: 6, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //从相册选择
				    success: function (res) {
				        console.log(JSON.stringify(res.tempFilePaths));
				    }
				});
			},
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			},
			bindDateChange: function(e) {
				this.date = e.target.value
			},
			bindTimeChange: function(e) {
				this.time = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			}
		}
	}
</script>

<style>
	.content{
		background-color: #F3F5F4;
		color: #939999;
	}
	.header {
		margin-top: 10rpx;
		background-color: #FFFFFF;
	}

	.header>view {
		display: flex;
		justify-content: space-between;
		font-size: 30rpx;
		border-bottom: 1rpx #F3F5F4 solid;
		padding: 40rpx 40rpx;
	}

	.header>view input {
		width: 250rpx !important;
		/* border: #F3F5F4 1rpx solid; */
		padding: 2rpx 10rpx;
		box-sizing: border-box;
		background-color: #ffffff;
	}

	.header>view:nth-of-type(3)>view:nth-of-type(2) {
		color: #007AFF;
	}

	.header>view:nth-of-type(4)>view:nth-of-type(2) {
		color: #007AFF;
	}
	.paizhao{
		margin-top: 4rpx;
		background-color: #FFFFFF;
		font-size: 32rpx;
		padding: 20rpx 40rpx;
	}
	.paizhao>view:nth-of-type(2){
		margin-top: 20rpx;
		width: 300rpx;
		height: 300rpx;
		padding: 30rpx;
		box-sizing: border-box;
		border: #F3F5F4 2rpx solid;
	}
	.wenzi{
		margin-top: 4rpx;
		background-color: #FFFFFF;
		padding: 20rpx 40rpx;
		font-size: 32rpx;
	}
	.wenzi>view:nth-of-type(2){
		margin-top: 20rpx;
		border: #F3F5F4 2rpx solid;
		height: 300rpx;
		padding: 10rpx 20rpx;
		box-sizing: border-box;
	}
	.form-btn{
		margin-bottom: 10rpx;
		background-color: #FFFFFF;
		display: flex;
		width: 100%;
	}
	.form-btn button{
		width: 65%;
		background-color: #3DCDB4 !important;
	}
</style>
