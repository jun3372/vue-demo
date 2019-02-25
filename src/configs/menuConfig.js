// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置
const headerMenuConfig = [];
const asideMenuConfig = [{
        path: '/dashboard',
        name: 'Dashboard',
        icon: 'el-icon-menu',
        children: [{
                path: '/analysis',
                name: '分析页',
            },
            {
                path: '/monitor',
                name: '监控页',
            },
            {
                path: '/workplace',
                name: '工作台',
            },
        ],
    },
    {
        name: '表单',
        path: '/form',
        icon: 'el-icon-tickets'
    },
    {
        name: '登录',
        path: '/login'
    },
];

export {
    headerMenuConfig,
    asideMenuConfig
};