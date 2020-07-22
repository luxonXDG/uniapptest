<template>
	<view>
		<view class="list" v-for="(item,i) in list" :key="i">
			<view class="listLeft">
				{{item.listLeft}}
			</view>
			<view class="listRight">
				{{item.listRight}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{listLeft:"参与患教活动",listRight:"+500"},
					{listLeft:"参与患教活动",listRight:"+500"},
					{listLeft:"参与患教活动",listRight:"+500"}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.list{
	display: flex;
	justify-content: space-between;
	height: 50px;
	width: 100%;
	border-bottom: 1px solid #F2F5F4;
}
.listLeft{
	font-size: 15px;
	margin-left: 10px;
	height: 100%;
	line-height: 50px;
	color: #696969;
}
.listRight{
	font-size: 15px;
	line-height: 50px;
	margin-right: 10px;
	color: 	#FF4500;
}
</style>
