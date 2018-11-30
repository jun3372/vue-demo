const Mock = require('mockjs');

Mock.mock('/api/data', (req, res) => {
    return {
        data: ['a', 'b']
    }
})

Mock.mock('/api/auth/login', 'post', (req, res) => {
    let body = JSON.parse(req.body);

    if (body.username.length < 4) {
        return Mock.mock({
            "code": "1001",
            "message": "请输出正确的用户名",
        });
    }

    if (body.password.length < 4) {
        return Mock.mock({
            "code": "1001",
            "message": "请输出正确的密码",
        });
    }

    return Mock.mock({
        "code|1": [
            "2000",
            "1001"
        ],
        "message": "@csentence()",
        "data": {
            "userId": "@id()",
            "username": "@cname()",
            "age|1-100": 100,
            "county": "@county(true)",
            "token": "@guid()"
        },
        "timestamp": "@now('yyyy-MM-dd HH:mm:ss')"
    })
})
