# Vue Admin Demo

> 该模板适用于从 0 到 1 开始搭建项目，内置基础的页面，路由和菜单展示。

# [Demo演示](https://vue-demo-1251209281.cos-website.ap-chengdu.myqcloud.com/#/login)

# 菜单配置

> 文件 src/configs/menuConfig.js

    // headerMenuConfig：头部导航配置
    const headerMenuConfig = [];

    // asideMenuConfig：侧边导航配置
    const asideMenuConfig = [
        {
            path: '路由地址',
            name: '菜单名',
            icon: '图标',
            children: [
                {
                    path: '路由地址',
                    name: '菜单名称',
                },
                ...
            ]
        },
        ....
    ];

# 路由注册

> 文件 src/configs/routerConfig.js

    const routerConfig = [
        {
            path: '/login',             // 登录路由地址
            layout: false,              // 是否使用布局
            component: 'Auth/Login',    // .vue文件
        },
        {
            path: '*',                  // 没有匹配到的路由
            component: 'NotFound/404',  // 没有匹配到路由的显示.vue文件
        },
    ];

# 接口请求配置

> 文件 src/configs/axios.js

    // http请求拦截器
    axios.interceptors.request.use(config => {

    });

    // http响应拦截器
    axios.interceptors.response.use(data => {

    });

# 运行步骤

### 1. 克隆项目

    git clone git@github.com:jun3372/vue-demo.git

### 2. 进入项目目录

    cd vue-demo

### 3. 安装依赖

    npm install

### 4. 运行项目

    npm start

### 5. 打包项目

    npm run build
