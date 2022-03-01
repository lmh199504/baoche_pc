<template>
	<div class="layout">
		<navHeader />
		<router-view />
		<LeftForm />
		<RightMenu />
	</div>
</template>

<script>
	import LeftForm from './leftForm.vue'
	import NavHeader from './navHeader.vue'
	import RightMenu from './rightMenu.vue'
	export default{
		components: {
			NavHeader,
			LeftForm,
			RightMenu
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
