<template>
	<div class="">
		<div class="right_menu">
			<div class="menu_item">
				<img class="menu_icon" src="../assets/images/layout/car.png" >
				<div>车型选择</div>
			</div>
			<div class="menu_item">
				<img class="menu_icon" src="../assets/images/layout/money.png" >
				<div>我想询价</div>
			</div>
			<div class="menu_item" @mouseenter="enter" @mouseleave="leave">
				<img class="menu_icon" src="../assets/images/layout/phone.png" >
				<div>免费通话</div>
				<div class="phone_input" v-show="showPhone">
					<div class="phone_input_inner">
						<a-input-search
							v-model="phone"
							:maxLength="11"
							placeholder="输入手机号，调度员马上联系您"
							enter-button="提交"
							@search="onSearch"
						>
							<template slot="prefix">
								<img src="../assets/images/layout/phone_icon.png" >
							</template>
						</a-input-search>
					</div>
				</div>
			</div>
			<div class="menu_item">
				<img class="menu_icon" src="../assets/images/layout/backtop.png" >
				<div>回到顶部</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				phone: "",
				showPhone: false
			}
		},
		methods: {
			onSearch() {
				console.log('提交')
			},
			enter() {
				this.showPhone = true
			},
			leave() {
				this.showPhone = false
			}
		}
	}
</script>

<style scoped lang="less">
	.right_menu{
		position: fixed;
		right: 20px;
		top: 320px;
		.menu_item{
			width: 90px;
			height: 90px;
			background: #F3F8F8;
			box-shadow: inset -2px -2px 0px 0px #6902FF, inset 2px 2px 0px 0px #05D1E3;
			border-radius: 2px;
			display: flex;
			align-items: center;
			flex-direction: column;
			justify-content: center;
			cursor: pointer;
			margin-bottom: 10px;
			position: relative;
			&:hover{
				background: #05D1E3;
				color: #fff;
			}
			.menu_icon{
				width: 40px;
				height: 40px;
			}
			.phone_input{
				position: absolute;
				right: 90px;
				padding-right: 10px;
				.phone_input_inner{
					background: #05D1E3;
					box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.2), inset -2px -2px 0px 0px #6902FF;
					border-radius: 2px;
					display: flex;
					flex-direction: column;
					justify-content: center;
					padding: 40px;
					width: 468px;
					height: 90px;
					/deep/ .ant-input-search-button{
						background: #FF5543;
					}
				}
			}			
		}
	}
</style>
