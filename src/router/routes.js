/*
 * @Author: qqli
 * @Date: 2021-11-11 16:35:20
 * @Last Modified by: qqli
 * @Last Modified time: 2022-05-19 18:21:21
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
                component: () => import('../views/1-dashboard.vue')
            },
            {
                path: '/about',
                name: 'about',
                component: () => import('../views/2-about.vue')
            },
            {
                path: '/imageDownload',
                name: 'imageDownload',
                component: () => import('../views/3-imageDownload.vue')
            },
            {
                path: '/iframeSameDomain',
                name: 'iframeSameDomain',
                component: () => import('../views/4-iframeSameDomain.vue')
            },
            {
                path: '/iframeCrossDomain',
                name: 'iframeCrossDomain',
                component: () => import('../views/5-iframeCrossDomain.vue')
            },
            {
                path: '/jszip',
                name: 'jszip',
                component: () => import('../views/6-jszip.vue')
            },
            {
                path: '/animate',
                name: 'animate',
                component: () => import('../views/7-animate.vue')
            },
            {
                path: '/setup',
                name: 'setup',
                component: () => import('../views/8-setup.vue')
            },
            {
                path: '/multipleVModel',
                name: 'multipleVModel',
                component: () => import('../views/9-multipleVModel.vue')
            },
            {
                path: '/slot',
                name: 'slot',
                component: () => import('../views/10-slot.vue')
            },
            {
                path: '/worker',
                name: 'worker',
                component: () => import('../views/11-worker.vue')
            }
        ]
    },
    {
        path: '/iframeSameDomainSub',
        name: 'iframeSameDomainSub',
        component: () => import('../views/4-iframeSameDomainSub.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/'
    }
]

export default routes
