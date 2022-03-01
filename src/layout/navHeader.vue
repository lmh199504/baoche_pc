<template>
	<div class="navHeader">
		<div class="nav_inner">
			<div class="nav_left">
				<div class="left_img">
					<img src="../assets/logo.png" >
				</div>
				<div class="left_text">
					<div class="big_title">包车邦</div>
					<div class="sub_title">让出行更简单！</div>
				</div>
			</div>
			<div class="nav_right">
				<router-link class="nav_item" active-class="nav_item_active" tag="div" to="/home">首页</router-link>
				<router-link class="nav_item" active-class="nav_item_active" tag="div" to="/service">服务</router-link>
				<router-link class="nav_item" active-class="nav_item_active" tag="div" to="/brand">品牌</router-link>
				<router-link class="nav_item" active-class="nav_item_active" tag="div" to="/comment">评价</router-link>
				<router-link class="nav_item" active-class="nav_item_active" tag="div" to="/about">关于</router-link>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped lang="less">
	.navHeader{
		height: 80px;
		border-bottom: 6px solid #05D1E3;
		box-sizing: border-box;
		position: fixed;
		width: 100%;
		left: 0;
		top: 0;
		width: 100%;
		background: #434C77;
		.nav_inner{
			width: 1200px;
			margin: auto;
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 100%;
			.nav_left{
				display: flex;
				align-items: center;
				.left_img{
					width: 48px;
					height: 48px;
					border-radius: 10px;
					margin-right: 10px;
					background: #D8D8D8;
					img{
						width: 100%;
						height: 100%;
					}
				}
				.left_text{
					display: flex;
					flex-direction: column;
					justify-content: center;
					.big_title{
						font-size: 21px;
						letter-spacing: 5px;
						color: #05D1E3;
						font-weight: 600;
					}
					.sub_title{
						font-size: 12px;
						font-weight: bold;
						color: #05D1E3;
					}
				}
			}
			.nav_right{
				display: flex;
				align-items: center;
				.nav_item{
					margin-left: 72px;
					cursor: pointer;
					position: relative;
					height: 60px;
					line-height: 60px;
					font-size: 21px;
					font-weight: 400;
					color: #FFFFFF;
					&:hover{
						color: #05D1E3;
					}
				}
				.nav_item_active{
					color: #05D1E3;
					&::after{
						content: '';
						display: block;
						position: absolute;
						width: 100%;
						height: 6px;
						background: #05D1E3;
						border-radius: 3px;
						bottom: 5px;
					}
				}
			}
		}
	}
</style>
