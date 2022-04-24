module.exports = {
    "root": true,
    "env": {
        "node": true
    },
    "extends": [
        "plugin:vue/vue3-essential",
        // "plugin:vue/vue3-recommended"
        "eslint:recommended"
    ],
    "parserOptions": {
        "parser": "@babel/eslint-parser"
    },
    "rules": {
        "arrow-parens": 0,
        "generator-star-spacing": 0,
        "no-unused-vars": "off",
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off", // 不允许使用 console
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off", // 不允许使用 debugger
        "semi": [ // 行尾不使用分号
            "warn",
            "never"
        ],
        "indent": [ // 缩进
            "warn",
            4
        ],
        "space-before-function-paren": 0,
        "eol-last": 0,
        "no-useless-escape": "off",
        // "max-len": [
        //     2,
        //     200,
        //     4,
        //     {
        //         "ignoreUrls": true
        //     }
        // ],
        "prefer-const": [
            "warn",
            {
                "destructuring": "all",
                "ignoreReadBeforeAssign": false
            }
        ],
        // "guard-for-in": "warn"
    }
}