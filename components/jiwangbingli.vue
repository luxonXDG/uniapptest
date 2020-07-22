<template>
	<view>
		<!-- 既往病历 -->
		<!-- 完整病历第三模块 -->
		<view>
			<view class="main" v-for="(item,i) in list" :key='i'>
				<view class="flex">
					<text>是否有药物过敏</text>
					<text v-if="item.isguomin" class="color">是</text>
					<text v-else class="color">否</text>
				</view>
				<view>
					<view>过敏药物名称</view>
					<view class="color padding">
						{{item.guominyaowu}}
					</view>
				</view>
				<view>
					<view class="flex">
						<text>是否有外伤史</text>
						<text v-if="item.iswaishang" class="color">是</text>
						<text v-else class="color">否</text>
					</view>
					<view class="color padding">
						{{item.waishangmiaoshu}}
					</view>
				</view>
				<view class="flex">
					<text>慢病史</text>
					<text v-if="item.iswaishang" class="color">是</text>
					<text v-else class="color">否</text>
				</view>
				<view>
					<view>慢病史名称</view>
					<view class="color padding">
						{{item.manxingbing}}
					</view>
				</view>
				<view class="flex">
					<text>窒息史</text>
					<text v-if="item.iszhixi" class="color">是</text>
					<text v-else class="color">否</text>
				</view>
				<view class="flex">
					<text>产伤</text>
					<text v-if="item.ischanshang" class="color">是</text>
					<text v-else class="color">否</text>
				</view>
				<view class="flex">
					<text>感染</text>
					<text v-if="item.isganran" class="color">是</text>
					<text v-else class="color">否</text>
				</view>
				<view class="flex">
					<text>出血</text>
					<text v-if="item.ischuxue" class="color">是</text>
					<text v-else class="color">否</text>
				</view>
				<view class="flex">
					<text>是否高热惊厥史</text>
					<text v-if="item.isgaore" class="color">是</text>
					<text v-else class="color">否</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[{
					// 是否有药物过敏
					isguomin:true,
					// 过敏药物名称
					guominyaowu:"德巴金 苯妥英钠",
					// 是否有外伤史
					iswaishang:true,
					waishangmiaoshu:"这块是描述这个外伤史的内容这块是描述",
					// 慢病史
					ismanxingbing:true,
					// 慢病史名称
					manxingbing:"代谢综合征 高血糖 高血脂",
					// 窒息史
					iszhixi:true,
					// 产伤
					ischanshang:true,
					// 感染
					isganran:false,
					// 出血
					ischuxue:false,
					// 是否高热惊厥史
					isgaore:true
				}]
			};
		}
	}
</script>

<style>
	.color{
		color: #939999;
	}
	.main>view{
		padding: 20rpx 0;
		border-bottom: 1rpx solid #CACCCB;
	}
	.flex{
		display: flex;
		justify-content: space-between;
	}
	.padding{
		padding-top: 20rpx;
	}
</style>
