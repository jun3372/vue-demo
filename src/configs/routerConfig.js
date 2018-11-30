// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称


const routerConfig = [{
        path: '/',
        component: 'Dashboard',
        children: [{
            path: '/dashboard/analysis',
            component: 'Dashboard',
        }],
    },
    {
        path: '/login',
        name: 'login',
        layout: false,
        component: 'Auth/Login',
    },
    {
        path: '*',
        component: 'NotFound/404',
    },
];

export default routerConfig;
