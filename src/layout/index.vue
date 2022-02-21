<template>
	<div class="layout">
		<navHeader />
		<div class="main-container">
			<router-view />
		</div>
	</div>
</template>

<script>
	import NavHeader from './navHeader.vue'
	export default{
		components: {
			NavHeader
		}
	}
</script>

<style scoped lang="less">
	.layout{
		padding-top: 80px;
	}
	.main-container{
		width: 1200px;
		margin: auto;
	}
</style>
