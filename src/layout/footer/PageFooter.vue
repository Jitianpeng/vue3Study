<template>
    <div class="footer">
        <div class="linkList">
            <a
                v-for="(item, index) in data.footerlinks"
                :key="index"
                :href="item.link ? item.link : 'javascript: void(0)'"
                target="_blank"
            >{{ item.title }}
            <span class="separator">|</span>
            <!-- <component :is="data[item.icon]"></component> -->
            <github-outlined />
        </a>
        </div>
        <div class="bottom">
            <a href="https://v3.cn.vuejs.org/guide/introduction.html">
                好好学习，天天向上
            </a>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { GithubOutlined } from '@ant-design/icons-vue'
const data = reactive({
    footerlinks: [
        {
            link: 'https://github.com/Jitianpeng',
            title: '天月飞鸟',
            icon: 'github'
        }
    ],
    github: ref('github-outlined')
})
</script>

<style lang="less" scoped>
.footer{
    padding: 48px 16px 24px;
    /*margin: 48px 0 24px;*/
    text-align: center;
    .linkList{
        margin-bottom: 8px;
        a:not(:last-child) {
            margin-right: 40px;
        }
        a{
            color: rgba(0, 0, 0, .45);
            -webkit-transition: all .3s;
            transition: all .3s;
            .separator {
                padding: 0 10px;
            }
        }
    }
    .bottom{
        a {
            color: rgba(0, 0, 0, .45);
            font-size: 14px;
        }
        i {
            margin: 0 4px;
        }
    }
}
</style>