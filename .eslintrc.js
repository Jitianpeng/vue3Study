module.exports = {
    "root": true,
    "env": {
        "node": true
    },
    "extends": [
        "plugin:vue/vue3-essential",
        "plugin:vue/vue3-recommended"
        // "eslint:recommended"
    ],
    "parserOptions": {
        "parser": "@babel/eslint-parser"
    },
    "rules": {
        "arrow-parens": 0,
        "generator-star-spacing": 0,
        "no-unused-vars": "off",
        // "vue/multi-word-component-name": 0, // 关闭 vue 组件名 强制驼峰命名
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off", // 不允许使用 console
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off", // 不允许使用 debugger
        "semi": [ // 行尾不使用分号
            "warn",
            "never"
        ],
        "indent": [ // 缩进
            "error",
            4
        ],
        "space-before-function-paren": 0,
        "eol-last": 0,
        "no-useless-escape": "off",
        "prefer-const": [
            "warn",
            {
                "destructuring": "all",
                "ignoreReadBeforeAssign": false
            }
        ],
        "guard-for-in": "warn",
        // vue 配置
        "vue/max-attributes-per-line": 0, // 第一个属性换行
        "vue/html-indent": [1, 4], // vue html部分缩进
        "vue/require-prop-types": 0, // vue 组件接收的组件是否必须定义类型
        "vue/html-self-closing": 0, // vue 空标签是否要求必须 单标签关闭
        "vue/attributes-order": [0], // 强制属性顺序
        "vue/multiline-html-element-content-newline": [0], // 需要在多行元素的内容前后换行
        "vue/attribute-hyphenation": [0], // vue/属性连字符
    }
}