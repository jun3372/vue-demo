module.exports = {
    // 基本路径
    baseUrl: '',
    // 输出文件目录
    outputDir: 'dist',
    assetsDir: 'static',
    // eslint-loader 是否在保存的时候检查
    lintOnSave: false,
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.json', '.vue'],
        },
    },
};
