import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'
Vue.use(VueRouter)

const routes = [
	{
		path: '',
		name: 'Layout',
		component: Layout,
		redirect: '/home',
		children: [
			{
				path: 'home',
				name: 'Home',
				meta: {
					title: '首页'
				},
				component: () => import('@/views/home')
			},
			{
				path: 'about',
				name: 'About',
				// route level code-splitting
				// this generates a separate chunk (about.[hash].js) for this route
				// which is lazy-loaded when the route is visited.
				meta: {
					title: '关于'
				},
				component: () => import( /* webpackChunkName: "about" */ '@/views/about')
			},
			{
				path: 'brand',
				name: 'Brand',
				meta: {
					title: '品牌'
				},
				component: () => import('@/views/brand')
			},
			{
				path: 'comment',
				name: 'Comment',
				meta: {
					title: '评论'
				},
				component: () => import('@/views/comment')
			},
			{
				path: 'service',
				name: 'Service',
				meta: {
					title: '服务'
				},
				component: () => import('@/views/service')
			}
		]
	}
]

const router = new VueRouter({
	routes
})

export default router
