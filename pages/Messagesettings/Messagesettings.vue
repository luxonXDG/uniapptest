<template>
	<view>
		<view class="set">
			<view class="massage">
				消息通知
			</view>
			<view class="Switch">
				<switch style="transform:scale(0.7);color: #3dcdb4" @change="switch1Change" />
				
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
			switch1Change: function (e) {
			            console.log('switch1 发生 change 事件，携带值为', e.target.value)
			        }
		}
	}
</script>

<style>
.set{
	height: 60px;
	border-bottom: 1px solid #CACACC;
	display: flex;
	justify-content: space-between;
}
.massage{
	font-size: 15px;
	color: #C0C0C0;
	line-height: 60px;
	padding-left: 10px;
}
.Switch{
	margin-right: 10px;
	margin-top: 15px;
}

</style>
