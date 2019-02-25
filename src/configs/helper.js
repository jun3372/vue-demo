import Vue from 'vue';

const helper = {

    url: {
        isPath(path = '/') {
            return window.location.href.split('#')[1] == path;
        },
        isLoginPath() {
            return this.isPath('/login');
        },
        toLoginPath() {
            window.location.href = adminURL + '#/login';
        }
    },

    /**
     * 缓存相关
     */
    cache: {
        /**
         * 设置
         * @param key
         * @param val
         */
        set(key, val) {
            window.localStorage.setItem(key, val);
        },

        /**
         * 获取
         * @param key
         * @returns {string}
         */
        get(key) {
            return window.localStorage.getItem(key);
        },

        /**
         * 删除
         * @param key
         */
        remove(key) {
            window.localStorage.removeItem(key);
        },

        /**
         * 清除
         */
        clear() {
            window.localStorage.clear();
        }
    },

    array: {
        /**
         * 使用indexOf判断元素是否存在于数组中
         * @param {Object} arr 数组
         * @param {String} val 元素值
         */
        in (arr, val) {
            if (arr.indexOf && typeof(arr.indexOf) == 'function') {
                var index = arr.indexOf(val);
                if (index >= 0) {
                    return true;
                }
            }

            return false;
        },

        /**
         * 删除指定元素
         * @param {Object} arr 数组
         * @param {String} val 元素值
         */
        remove(arr, val) {
            var index = arr.indexOf(val);
            if (index > -1) {
                arr.splice(index, 1);
            }

            return arr
        }
    },

    /**
     * 回调地址相关设置
     */
    callBack: {
        /**
         * 回调地址缓存Key
         */
        callBackKey: 'callback',

        /**
         * 获取回调地址
         * @returns {string}
         */
        get() {
            return window.localStorage.getItem(this.callBackKey);
        },

        /**
         * 记录回调地址
         * @param url
         */
        set(url) {
            if (url == null) {
                url = window.location.href.split('#')[1];
            }

            window.localStorage.setItem(this.callBackKey, window.location.href.split('#')[1]);
        },

        /**
         * 清理回调地址
         */
        clear() {
            window.localStorage.removeItem(this.callBackKey);
        }
    }
};

const exports = {
    // 注册组件
    install(Vue) {
        Vue.prototype.help = helper;
        Vue.prototype.$help = helper;
    }
};

// 将全局函数当做插件来进行注册
Vue.use(exports);


export default helper;