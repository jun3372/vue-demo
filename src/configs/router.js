import Vue from 'vue';
import Router from 'vue-router';
import routerConfig from './routerConfig';

/**
 * 将路由配置扁平化
 * @param {Array} config 路由配置
 * @return {Route}
 * @example
 * const routes = [
 *   {
 *     path: '/dashboard/analysis',
 *     component: HeaderAsideLayout,
 *     children: [
 *       {
 *         path: '',
 *         component: Dashboard,
 *       },
 *     ],
 *   },
 * ];
 */

const routerMap = [];

const recursiveRouterConfig = (config = []) => {
    config.forEach((item) => {
        // 默认component
        let component = item.component;

        // 懒加载
        if (typeof component == 'string') {

            // 是否需要加载.vue后缀
            if (component.substr(-4) != '.vue') {
                component += '.vue';
            }

            // 是否为全部路由
            if (component[0] != '@') {
                // 不是全部路由, 在pages下查询
                component = () => import('@/pages/' + item.component);
            } else {
                // 全部路由
                component = () => import(item.component);
            }
        }

        // 默认布局
        let layout = () => import('@/layouts/HeaderAsideLayout');

        // 没有布局
        if (item.layout == 'no' || item.layout == 'NotLayout' || item.layout == false) {
            layout = () => import('@/layouts/NotLayout.vue');
        }

        const route = {
            path: item.path,
            // name: item.name,
            component: layout,
            children: [{
                path: '',
                component: component,
            }, ],
        };

        if (Array.isArray(item.children)) {
            recursiveRouterConfig(item.children);
        }

        routerMap.push(route);
    });

    return routerMap;
};

const routes = recursiveRouterConfig(routerConfig);

Vue.use(Router);

const Routers = new Router({
    routes,
    // mode: 'history'
})

// 路由前置操作
Routers.beforeEach((to, from, next) => {
    let path = to.path;
    // 用户token
    let token = localStorage.getItem('adminToken') ? localStorage.getItem('adminToken') : localStorage.getItem('token')
    if (typeof token != 'undefined' && token != null) {
        // 已经登录
        if (path == '/login') {
            console.log("已经登录过了");

            return next({
                path: "/"
            });
        }

        return next();
    }

    // 没有登录跳转至登录页面
    if (path != "/login") {
        return next({
            path: "/login"
        });
    }


    return next();
});

// 路由后置操作
Routers.afterEach((to, from) => {

});

export default Routers;
