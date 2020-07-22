<template>
	<view>
		<view class="accountList">
			<view>
				<view class="listName">
					修改密码
				</view>
				<view class="open">
				   <image src="../../static/img/dayu.png" mode=""></image>
				</view>
			</view>
			<view>
				<view class="listName">
					第三方关联
				</view>
				<view class="open">
				   <image src="../../static/img/dayu.png" mode=""></image>
				</view>
			</view>
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
			
		}
	}
</script>

<style>
.accountList>view{
	display: flex;
	justify-content:space-between ;
	height: 60px;
	border-bottom: 1px solid #F2F5F4;
	
}
.listName{
	color: #939998;
	font-size: 15px;
	margin-left: 10px;
	line-height: 60px;
}
.open image{
	height: 35px;
	width: 35px;
	margin-right: 10px;
	margin-top: 15px;
}
</style>
