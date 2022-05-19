/*
 * @Author: qqli
 * @Date: 2021-11-11 16:35:20
 * @Last Modified by: qqli
 * @Last Modified time: 2022-05-18 17:38:46
 * @Desc：定义一些路由，每个路由都需要映射到一个组件。
 *       路由懒加载，动态导入组件,会根据组件名打包出同名js包
 */

const routes = [
    {
        path: '/',
        name: 'app',
        component: () => import('../views/main.vue'),
        redirect: '/dashboard',
        children: [
            {
                path: '/dashboard',
                name: 'dashboard',
                component: () => import('../views/dashboard.vue')
            },
            {
                path: '/about',
                name: 'about',
                component: () => import('../views/about.vue')
            },
            {
                path: '/imageDownload',
                name: 'imageDownload',
                component: () => import('../views/imageDownload.vue')
            },
            {
                path: '/iframeSameDomain',
                name: 'iframeSameDomain',
                component: () => import('../views/iframeSameDomain.vue')
            },
            {
                path: '/iframeCrossDomain',
                name: 'iframeCrossDomain',
                component: () => import('../views/iframeCrossDomain.vue')
            },
            {
                path: '/jszip',
                name: 'jszip',
                component: () => import('../views/jszip.vue')
            },
            {
                path: '/animate',
                name: 'animate',
                component: () => import('../views/animate.vue')
            },
            {
                path: '/setup',
                name: 'setup',
                component: () => import('../views/setup.vue')
            },
            {
                path: '/multipleVModel',
                name: 'multipleVModel',
                component: () => import('../views/multipleVModel.vue')
            },
            {
                path: '/slot',
                name: 'slot',
                component: () => import('../views/slot.vue')
            },
            {
                path: '/newWorker',
                name: 'newWorker',
                component: () => import('../views/newWorker.vue')
            }
        ]
    },
    {
        path: '/iframeSameDomainSub',
        name: 'iframeSameDomainSub',
        component: () => import('../views/iframeSameDomainSub.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/'
    }
]

export default routes
