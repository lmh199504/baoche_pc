import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'
Vue.use(VueRouter)

const routes = [
	{
		path: '',
		name: 'Layout',
		component: Layout,
		redirect: '/',
		children: [
			{
				path: '/',
				name: 'Home',
				component: () => import('@/views/home')
			},
			{
				path: '/about',
				name: 'About',
				// route level code-splitting
				// this generates a separate chunk (about.[hash].js) for this route
				// which is lazy-loaded when the route is visited.
				component: () => import( /* webpackChunkName: "about" */ '@/views/about')
			}
		]
	}
]

const router = new VueRouter({
	routes
})

export default router
