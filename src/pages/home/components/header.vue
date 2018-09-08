<template>
	<div class="header">
		<div class="header-left">
			<span class="iconfont back-icon">&#xe624;</span>
		</div>
		<div class="header-input">
			<span class="iconfont find-icon">&#xe632;</span>
			<input type="text" @blur="blurfn" @focus="focusfn" v-model="defaultval">
		</div>
		<div class="header-right">城市<span class="iconfont  arrow-icon">&#xe64a;</span></div>
	</div>
</template>
<script>
	export default {
		name:'homeHeader',
		data:function (argument) {
			return {
				defaultval:'输入城市景点/游玩主题'
			}
		},
		methods:{
			focusfn:function(){
				this.defaultval=''
			},
			blurfn:function(){
				this.defaultval=this.defaultval==''?'输入城市景点/游玩主题':this.defaultval
			}
		}
	}
</script>
<style lang="stylus" scoped>
	@import '~mystyles/varibles.styl'
	.header
		color:#fff
		height: .86rem
		line-height:.86rem
		display: flex
		background:$bgcolor
		.header-left
			width: .64rem
			text-align:center
			back-icon
				font-size:.4rem
		.header-input
			color:#ccc
			flex:1
			height:.64rem
			background:#fff
			margin-top:.12rem
			border-radius:.1rem
			line-height.64rem;
			overflow:hidden
			.find-icon
				float:left;
				width:.44rem
				text-align:center
			input
				float:left
				width:calc(100% - .44rem)
				height:100%
		.header-right
			width: 1.24rem
			text-align:center
			.arrow-icon
				font-size:.24rem


</style>